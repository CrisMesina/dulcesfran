import React from 'react'
import { Productos } from '../types/typeApp'

export const DulcesCard:React.FC<Productos>= ({imgURL,name, price, discount}) => {
  const discountPrice = price * ( discount / 100 ) 
  const totalPrice = price - discountPrice

  return (
    <>
        <div className='flex flex-wrap w-60 mb-4 h-24 sm:h-24 sm:w-80 md:w-full mx-10 rounded-2xl bg-gradient-to-b from-pink-300 via-white to-pink-500'>
            <div>
                <img src={imgURL} className='absolute mx-auto w-20 sm:w-24' />
            </div>
            <div>
              <h1 className="ml-30 mt-8 text-3xl font-Salmoon font-extrabold">{name}</h1>
            </div>
            <div className="">
              <p className="absolute left-[600px] mt-5 line-through">$ {price}</p>
              <p className="absolute left-[680px] mt-5 text-green-500">{discount}% OFF</p>
              <p className="absolute left-[580px] my-10 ml-5">$ {totalPrice} c/u</p>
            </div>

        </div>
    </>
  )
}
