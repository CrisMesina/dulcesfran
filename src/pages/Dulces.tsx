
import { Nav } from '../components/Nav'

import Swal from 'sweetalert2'
import { Producto } from '../helpers/getData';
import { DulcesCard } from '../components/DulcesCard';




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


export const Dulces = () => {




    
    
  return (
    <>
        <Nav/>
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


                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                    {
                        Producto.map((p)=>(
                            <DulcesCard
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            imgURL={p.imgURL}
                            price={p.price}
                            discount={p.discount}
                            
                            />
                        ))
                    }
                </div>



            </div>
        </div>
    </>
  )
}
