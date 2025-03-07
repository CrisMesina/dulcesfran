import { createContext, useState } from "react"
import { children, Productos, valoresContexto } from "../types/typeApp";

export const carroContexto = createContext<valoresContexto>({} as valoresContexto);

export const CarProvider = ({children}:children)=>{

    const [listCart, setListCart] = useState<Productos[]>([])
    console.log(listCart)

    const addToCart = (item:Productos)=>{
        const existeItem = listCart.find((e) =>e.name === item.name)

        // SI existeItem se encuentra. Se le suma uno. En caso contrario se queda como 1, SI ES INDEFINIDO ES 0
        const cantidad  = existeItem ? ((existeItem.cantidad ||0) + 1): 1
        item["cantidad"] = cantidad;
        const listaNueva = existeItem ? listCart.map((e)=> e.name === item.name ? item : e) : [...listCart, item];

        return setListCart(listaNueva)
    }

    const borrarCarrito = (item:Productos)=>{
        const borrarCarro = listCart.filter((p) => p.name !== item.name )

        return setListCart(borrarCarro)
    }
    
    const restCarrito = (item:Productos)=>{
        item["cantidad"] = item.cantidad ? ((item.cantidad || 0) - 1): 0
        const nuevaLista = listCart.map((p)=> p.name === item.name ? item : p)
        
        return setListCart(nuevaLista)
    }
    
    const totalPagar = ()=>{
        const total = listCart.reduce((a, b) => a + b.price*(b.cantidad ||0 ), 0) 

        return total
    }


    return(
        <carroContexto.Provider value={{
            listCart, 
            addToCart,
            borrarCarrito,
            restCarrito,
            totalPagar,
            }}>
            {children}
        </carroContexto.Provider>
    )
}