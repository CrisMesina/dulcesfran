import { useContext, useState } from "react";
import { carroContexto } from "../context/CarProvider";
import Swal from "sweetalert2";
import { FaPlus, FaMinus  } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const useCarrito = () => useContext(carroContexto)

export const Carro = () =>{
    
    const {listCart, addToCart, restCarrito, borrarCarrito, totalPagar} = useCarrito()

    const carrito = listCart.map((p) =>
     <div key={p.name} className="flex flex-wrap">
        
        
        <div className="mx-auto">
            <p> {p.name}</p>
        </div>
        <div className="mx-auto">
            <p> {p.price}</p>
        </div>
        <div className="mx-auto">
            <p> {p.cantidad}</p>
        </div>
        <div className="mx-auto">
            <button className="p-1 mx-2 border rounded-xl w-auto" onClick={()=>restCarrito(p)}>
                <FaMinus  className="w-full"/>
            </button>
            <button className="p-1 mx-2 border rounded-xl w-auto" onClick={()=>addToCart(p)}>
                <FaPlus className="w-full" />
            </button>
            <button className="p-1 mx-2 border rounded-xl w-auto" onClick={()=>borrarCarrito(p)}>
                <MdDelete className="w-full" />
            </button>
        </div>
     </div>
    )

    function createWtsLink(){
        const productosTexto = listCart.map((p)=> `\n- ${p.name}: $${p.price} x ${p.cantidad}`).join("")


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

        const url = "https://wa.me/56972431830?text=" + encodeURIComponent("Hola!" + "\nMe gustaría  encargar lo siguiente:" + productosTexto + "\n\nMi total a pagar es: $" + totalPagar() + "\n\nLe agradecería que me mandara los datos para transferirle.")
        Toast.fire({
            icon: "success",
            text: "Estas siendo redireccionado al Whatsapp para realizar el pedido.."
        })

        setTimeout(()=>{
            location.href = url
        },2500)

    }


    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)



    
    
    return(
        <>
            <div className='absolute'>
                <button onClick={toggleMenu} className='absolute top-24 left-[1200px]' >
                    <FaShoppingCart className='w-10 h-10 hover:cursor-cell'/>
                </button>
            </div>
            {isMenuOpen && (
                    <div className="mt-20 w-[500px] top-16 h-96 absolute z-10 left-[800px] bg-gradient-to-b from-pink-500 via-pink-300 to-purple-600 rounded-xl">
                    <h1 className="text-center font-bold text-4xl drop-shadow-2xl text-white mb-2">Tu carrito</h1>
                
                    <div className="flex flex-col p-2 text-white text-center text-md font-bold">
                        {carrito}
                        Total a pagar: {totalPagar()}
                        <button onClick={createWtsLink}>
                            Hacer Pedido
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}