import { useContext } from "react";
import { carroContexto } from "../context/CarProvider";

const useCarrito = () => useContext(carroContexto)

export const Carro = () =>{
    
    const {listCart, addToCart, restCarrito, borrarCarrito, totalPagar} = useCarrito()

    const carrito = listCart.map((p) =>
     <tr key={p.name}>
        <td>{p.name}</td>
        <td>{p.price}</td>
        <td>{p.cantidad}</td>
        <button className="p-1 border rounded-xl w-10" onClick={()=>addToCart(p)}>+</button>
        <button className="p-1 border rounded-xl w-10" onClick={()=>restCarrito(p)}>-</button>
        <button className="p-1 border rounded-xl w-10" onClick={()=>borrarCarrito(p)}>x</button>
     </tr>
    )

    function createWtsLink(){
        const productosTexto = listCart.map((p)=> `\n- ${p.name}: $${p.price} x ${p.cantidad}`).join("")


        const url = "https://wa.me/56972431830?text=" + encodeURIComponent("Pedido recibido: " + "\nPedidos:" + productosTexto + "\n\nTotal: $" + totalPagar())

        return url
    }

    
    
    return(
        <>
        <h1 className="mt-20">tu Carrito</h1>
            <table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Precio</td>
                        <td>cantidad</td>
                    </tr>
                </thead>
                <tbody>

                    {carrito}

                </tbody>
            </table>
            <h2>Total a pagar:  {totalPagar()}</h2>
            <a href={createWtsLink()} className="w-auto border p-1">Realizar Pedido</a>

        </>
    )
}