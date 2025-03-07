import React from 'react'
import { Productos } from '../types/typeApp'


export const DulcesCard:React.FC<Productos>= ({imgURL,name, price, discount})=> {
  
  const discountPrice = price * ( discount / 100 ) 
  const totalPrice = price - discountPrice

  
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
          <p className='line-through italic'>${price}</p>
          <p className='p-1 text-3xl'>${totalPrice} c/u</p>
        </div>
        <button 

          className='w-36 mx-16 p-1 my-4 border border-pink-300 ring-0 focus:ring-1 focus:ring-pink-500 
          rounded-4xl bg-white outline-none font-Salmoon text-xl hover:bg-pink-300 hover:text-white focus:bg-pink-300 focus:text-white'>
            Agregar al carrito
        </button>
      </div>
    </>
  )
}

//<div className='flex flex-wrap w-60 mb-4 h-24 sm:h-24 sm:w-80 md:w-full mx-10 rounded-2xl bg-gradient-to-b from-pink-300 via-white to-pink-500'>
//  <div>
//    <img src={imgURL} className='absolute mx-auto w-20 sm:w-24' />
//  </div>
//  <div>
//    <h1 className="ml-30 mt-8 text-3xl font-Salmoon font-extrabold">{name}</h1>
//  </div>
//  <div className="">
//    <p className="absolute left-[600px] mt-5 line-through">$ {price}</p>
//    <p className="absolute left-[680px] mt-5 text-green-500">{discount}% OFF</p>
//    <p className="absolute left-[580px] my-10 ml-5">$ {totalPrice} c/u</p>
//  </div>
//</div>


//<div className='flex my-2 w-80 h-20 rounded-2xl bg-gradient-to-b from-pink-300 via-white to-pink-500'>
//  <div>
//    <img src={imgURL} className='my-3 w-14' alt={name} />
//  </div>
//  <div className=''>
//    <h1 className='my-7 font-Salmoon font-extrabold text-xl'>{name}</h1>
//  </div>
//  <div className='absolute left-64 w-96'>
//    <p className='absolute top-2 -left-7 line-through'>${price}</p>
//    <p className='absolute top-2 left-5 text-green-500'>{discount}% OFF</p>
//    <p className='absolute top-7 -left-6'>${totalPrice}</p>
//  </div>
//</div>
