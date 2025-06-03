import { useEffect, useState } from "react"
import { Productos } from "../types/typeApp"
import { Nav } from "./Nav"
import { MdDeleteForever } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";

export const Carro = () =>{ 

    const [items, setItems] = useState<Productos[]>([])
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const loadCart = () =>{
            try{
                const savedCart = localStorage.getItem("cart")
                if(savedCart){
                    const parsedCart = JSON.parse(savedCart)
                    setItems(parsedCart)
                }
            }catch (error){
                console.error("Error al cargar el carrito: ", error);
                
            }
        }

        loadCart()
    },[])

    useEffect(() =>{
        const newTotal = items.reduce((acc, item)=> acc + item.price * item.cantidad, 0)
        setTotal(newTotal)
    },[items])

    const removeItem = (id: number) =>{
        const updateItems = items.filter((item)=> item.id !== id)
        setItems(updateItems)
        localStorage.setItem("cart", JSON.stringify(updateItems))
    }

    const updateQuantity = (id:number, cantidad:number) =>{
        if(cantidad<1) return

        const updateItems = items.map((item) =>(item.id === id ? { ...item, cantidad}: item))
        setItems(updateItems)
        localStorage.setItem("cart", JSON.stringify(updateItems))
    }

    const formatPrice = (value:number) =>{
        return new Intl.NumberFormat("es-CL",{
            style: "currency",
            currency:"CLP"
        }).format(value)
    }
    const generateWhatsAppMessage = (): string => {
    if (items.length === 0) return ""

    const totalItems = items.reduce((acc, item) => acc + item.cantidad, 0)


    let message = "*NUEVO PEDIDO*\n\n"
    message += "*Detalle del pedido:*\n"

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`
      message += `   Cantidad: ${item.cantidad}\n`
      message += `   Precio unitario: ${formatPrice(item.price)}\n`
    })

    message += `*Resumen:*\n`
    message += `Total de productos: ${totalItems}\n`


    message += ` TOTAL A PAGAR: ${formatPrice(total)}*\n\n`
    message += "¡Gracias por tu compra!"

    return encodeURIComponent(message)
  }

  const sendToWhatsApp = () => {
    if (items.length === 0) {
      alert("El carrito está vacío")
      return
    }

    const phoneNumber = "56972431830" // Reemplaza con tu número de WhatsApp
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    window.open(whatsappUrl, "_blank")
  }



   
    if(items.length === 0){
        return(
            <>
                <div className="w-full h-screen text-black mt-20">
                    <Nav/>
                    <div className="flex flex-col">
                        <h1 className="text-center font-bold text-2xl mb-4">Tu carrito esta vacio!!!</h1>
                        <p className="text-center">Agrega productos para continuar...</p>
                        <a href="/servicios/dulces" className="mx-auto p-2 my-4 border border-pink-300 ring-0 focus:ring-1 focus:ring-pink-500 rounded-4xl bg-white outline-none font-Salmoon text-xl hover:bg-pink-300 hover:text-white focus:bg-pink-300 focus:text-white">
                            Volver a la tienda
                        </a>
                    </div>

                </div>
            </>
        )
    }


    return(
        <>
            <Nav/>
            <div className="container mx-auto px-4 py-1 pt-20">
                <div className="flex items-center">
                    <a href="/servicios/dulces" className="p-2 text-center w-32 my-4 border border-pink-300 ring-0 focus:ring-1 focus:ring-pink-500 rounded-4xl bg-white outline-none font-Salmoon text-xl hover:bg-pink-300 hover:text-white focus:bg-pink-300 focus:text-white">Volver</a>
                    <h1 className="text-2xl font-bold ml-auto" >Tu carrito</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 p-1 gap-2">
                <div className="lg:col-span-2">
                    <div className="rounded-lg mx-auto w-89 sm:w-180 p-0 sm:p-2 shadow-xl">
                        <div className="p-4">
                            <table className="w-8 sm:w-170">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-center py-2">Producto</th>
                                        <th className="text-center p-2">Cantidad</th>
                                        <th className="text-right p-2">Total</th>
                                        <th className="py-2">Eliminar</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item)=>(
                                        <tr key={item.id} className="w-full border-b">
                                            <td className="py-4">
                                                <div className="flex w-32 sm:w-full items-center">
                                                    <img 
                                                        src={item.imgURL || "/placeholder.svg" }
                                                        alt={item.name} 
                                                        className="h-8 w-8 sm:h-20 sm:w-20 object-cover rounded mr-4"
                                                    />
                                                    <span className="font-medium text-xs sm:text-xl">{item.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 text-center">
                                                <div className="flex items-center justify-center">
                                                    <button className="h-8 sm:w-20 sm:h-20 w-8 rounded-md"
                                                    onClick={() => updateQuantity(item.id, Math.max(1, item.cantidad -1))}>
                                                        <FaMinus className="mx-auto w-3 h-3 sm:w-5 sm:h-5"/>
                                                    </button>
                                                    <span className=" p-2 rounded-lg">{item.cantidad}</span>
                                                    <button className="h-8 sm:w-20 sm:h-20 w-8 rounded-md"
                                                    onClick={() => updateQuantity(item.id, item.cantidad +1)}
                                                    >
                                                        <FaPlus className="mx-auto w-3 h-3 sm:w-5 sm:h-5"/>
                                                    </button>

                                                </div>
                                                
                                            </td>
                                            
                                            <td className="py-4 text-center">{formatPrice(item.price * item.cantidad)}</td>
                                            <td className="py-4 text-center">
                                                <button onClick={()=> removeItem(item.id)}>
                                                    <MdDeleteForever className="w-5 h-5 sm:w-8 sm:h-8"/>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1 w-89 sm:w-180 mx-auto mb-10">
                    <div className="rounded-lg shadow-2xl p-6">
                        <h2 className="text-lg font-semibold mb-5">Resumen del pedido</h2>
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>{formatPrice(total)}</span>
                            </div>

                            <div className="border-t pt-4 mb-6">
                                <div className="flex justify-between font-semibold">
                                    <span>Total</span>
                                    <span>{formatPrice(total)}</span>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <button onClick={sendToWhatsApp} className="mx-auto -my-4 p-2 border border-pink-300 ring-0 focus:ring-1 focus:ring-pink-500 rounded-4xl bg-white outline-none font-Salmoon text-xl hover:bg-pink-300 hover:text-white focus:bg-pink-300 focus:text-white">
                                    Proceder al pago
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
    
}