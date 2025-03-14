import { Carro } from '../components/Carro';
import { Nav } from '../components/Nav'
import { carroContexto } from '../context/CarProvider';
import { Producto } from '../helpers/getData'
import { Productos } from '../types/typeApp';
import { useContext } from 'react';
import Swal from 'sweetalert2'


function goToInsta(){


    const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: (toast)=>{
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        })

        Toast.fire({
            icon: "success",
            text: "Estas siendo redireccionado al instagram de DulcesFran..."
        })

        setTimeout(()=>{
            location.href = "https://www.instagram.com/dulcesfran._/"
        },2500)

}

const useCarro = () => useContext(carroContexto)

export const Dulces:React.FC<Productos>= ()=> {

    const {addToCart} = useCarro()
    
    const calculateDiscountPrice = (price: number, discount:number)=>{
        const discountAmount = price * (discount/100)
        return price - discountAmount
    } 
    

    
    
  return (
    <>
        <Nav/>
        <Carro/>
        <div className="flex">
            <div className="flex flex-wrap mx-4 mt-28">
                <h1 className='w-full text-center font-Salmoon text-6xl font-extrabold'>Nuestros dulces</h1>
                <h6 className='w-full text-center text-2xl font-Salmoon mb-10'>
                    Recuerda hacer tus pedidos en nuestro
                        <a 
                            target='_blank'
                            className='text-pink-400 ml-1 cursor-pointer' 
                            title='Ir al instagram de DulcesFran'
                            onClick={goToInsta}>
                        Instagram
                        </a>
                </h6>

                <div className='grid grid-cols-1 -mx-10 sm:grid-cols-2 md:grid-cols-3 md:mx-10 '>
                    {
                       Producto.map((p)=>{
                        const totalPrice = calculateDiscountPrice(p.price, p.discount)
                        return(
                            <div className='w-72 h-80 my-2 rounded-2xl mx-16 drop-shadow-2xl shadow-pink-900 border-r border-l border-pink-400 bg-gradient-to-b from-pink-500 via-pink-100 to-white'>
                                <div className='w-full'>
                                    <img src={p.imgURL} alt="" className='w-22 mx-auto' />
                                </div>
                                <div>
                                    <h1 className='text-center font-Salmoon text-3xl'>{p.name}</h1>
                                </div>
                                <div className='mt-2 mx-10 w-full'>
                                    <p className='font-Salmoon ml-2 text-green-400'>{p.discount} % OFF</p>
                                    <p className='line-through italic'>${p.price}</p>
                                    <p className='p-1 text-3xl'>${totalPrice} c/u</p>
                                </div>
                                <button 
                                    onClick={()=> addToCart(p)}
                                    className='w-36 mx-16 p-1 my-4 border border-pink-300 ring-0 focus:ring-1 focus:ring-pink-500 
                                    rounded-4xl bg-white outline-none font-Salmoon text-xl hover:bg-pink-300 hover:text-white '>
                                    Agregar al carrito
                                </button>
                            </div>
                        )
                       })
                    }
                    
                </div>
            </div>
        </div>
    </>
  )
}
