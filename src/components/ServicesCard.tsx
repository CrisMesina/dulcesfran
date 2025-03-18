import React from 'react'
import { Servicios } from '../types/typeApp'



export const ServicesCard:React.FC<Servicios> = ({title,imgURL, href}) => {
  return (
    <>

      <div className='w-36 mb-4 h-auto sm:h-60 sm:w-80 md:w-72 rounded-2xl bg-gradient-to-b from-pink-300 via-white to-pink-500'>
        <div>
          <img src={imgURL} className='mx-auto w-20 sm:w-24' />
        </div>
        <h3 className='text-center text-3xl font-semibold w-full font-Salmoon'>{title}</h3>
        <a href={href}>
          <button className='border border-white ring-white ring-2 p-2 mx-8 w-20 my-4 sm:my-8  rounded-2xl sm:mx-36 md:mx-24 hover:bg-pink-400 hover:text-white hover:ring-2 font-semibold focus:outline-none focus:ring-2 focus:bg-pink-800 focus:text-white focus:ring-white'>
            Ver mas
          </button>
        </a>
      </div>
    </>
  )
}
