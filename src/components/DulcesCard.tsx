
import { useState } from 'react';
import { Productos } from '../types/typeApp'


export const DulcesCard:React.FC<Productos> = ({id, name, imgURL, price, discount, cantidad})=> {

  const [isAdd, setIsAdd] = useState(false)

  const handleAddToCart = (item: Productos) => {
    setIsAdd(true)

    setTimeout(()=>{
      let cart = []

      try{
        const savedCart = localStorage.getItem("cart")
        if(savedCart){
          cart = JSON.parse(savedCart)
        }
      }catch(error){
        console.error("Error al obtener el carrito :( :", error);
        
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const existeItem = cart.findIndex( (item:any ) => item.name.toLowerCase() === name.toLowerCase())

      if(existeItem>=0){
        cart[existeItem].cantidad = (cart[existeItem].cantidad ||0) + 1
      }else{
        cart.push({
          id,
          name,
          price,
          imgURL,
          discount,
          cantidad,
        })
      }

      localStorage.setItem("cart", JSON.stringify(cart))

      alert(`${item.name} AGREGADO AL CARRITO`)

      setIsAdd(false)
    },500)
  }

  const formatPrice =(value:number) =>{
    return new Intl.NumberFormat("es-CL",{
      style:"currency",
      currency: "CLP"
    }).format(value)
  }

  
  return(
    <>
      <div className='w-72 h-80 my-2 rounded-2xl mx-16 drop-shadow-2xl shadow-pink-900 border-r border-l border-pink-400 bg-gradient-to-b from-pink-500 via-pink-100 to-white'>
        <div className='w-full'>
          <img src={imgURL} alt="" className='w-24 mx-auto' />
        </div>
        <div>
          <h1 className='text-center font-Salmoon text-3xl'>{name}</h1>
        </div>
        <div className='mt-4 mx-10 w-full'>
          <p className='font-Salmoon ml-2 text-green-400'>{discount} % OFF</p>
          <p className='line-through italic'>${formatPrice(price)}</p>
        </div>
        <button 

          className='w-36 mx-16 p-1 my-4 border border-pink-300 ring-0 focus:ring-1 focus:ring-pink-500 
          rounded-4xl bg-white outline-none font-Salmoon text-xl hover:bg-pink-300 hover:text-white focus:bg-pink-300 focus:text-white'
          type='button'
          onClick={handleAddToCart}
          disabled={isAdd}
          >
            {isAdd ? (
              "Agregando.."
            ): (
              <>
                <span>Agregar al carrito</span>
              </>
            )}
        </button>
      </div>
    </>
  )
}
