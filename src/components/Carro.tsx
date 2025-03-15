import { useContext, useEffect, useRef, useState } from "react";
import { carroContexto } from "../context/CarProvider";
import Swal from "sweetalert2";
import { FaPlus, FaMinus  } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const useCarrito = () => useContext(carroContexto)

export const Carro = () =>{
    
    const {listCart, addToCart, restCarrito, borrarCarrito, totalPagar} = useCarrito()

    const carrito = listCart.map((p) =>
     <div key={p.name} className="flex flex-wrap w-full">
        
        
        <div className="w-36 mt-4">
            <p> {p.name}</p>
        </div>
        <div className="mx-auto w-16 mt-4">
            <p> {p.price}</p>
        </div>
        <div className="mx-auto mt-4">
            <p> {p.cantidad}</p>
        </div>
        <div className="mx-auto mt-4">
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

    const carritoRef = useRef<HTMLDivElement>(null)
    const botonRef = useRef<HTMLButtonElement>(null)


    useEffect(()=>{
        const handleClickOutside = (event: MouseEvent)=>{
            if(
                isMenuOpen &&
                carritoRef.current &&
                !carritoRef.current.contains(event.target as Node) &&
                botonRef.current &&
                !botonRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false)
            }

        }
        
        document.addEventListener("mousedown", handleClickOutside)

        return () =>{
            document.removeEventListener("mousedown",handleClickOutside)
        }
    }, [isMenuOpen])


    
    
    return(
        <>
            <div className='static'>
                <button onClick={toggleMenu} ref={botonRef} className='fixed z-10 bottom-6 right-6 bg-purple-500 p-4 rounded-full' >
                    <FaShoppingCart className='w-5 h-5 md:w-8 md:h-8 hover:cursor-cell fill-white drop-shadow-2xl' title="Tu carrito de compra"/>
                </button>

            </div>
            {isMenuOpen && (
                <div ref={carritoRef} className="mt-10 w-[370px] rounded-xl border-dashed top-6 h-auto fixed z-10 left-1 bg-white border">
                    <h1 className="text-center font-bold text-4xl drop-shadow-2xl text-black mb-2" title="Ver tu carrito de compras">Tu carrito</h1>

                    <div className="flex flex-col p-2 text-black text-center text-sm font-bold">
                        {carrito}
                        Total a pagar: {totalPagar()}
                        <button onClick={createWtsLink} className="p-1 border w-36 mx-auto rounded-2xl mt-4">
                            Hacer Pedido
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}