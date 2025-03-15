import { ServicesCard } from './ServicesCard'

const Data = [
  {
    title: "Dulces Caseros",
    imgURL: "/imgServiceRepo.png",
    href : "/servicios/dulces/"
  },
  {
    title: "Personalizacion",
    imgURL: "/imgServicesPerso.png",
    href : "/servicios/personalizacion/"
  },
  {
    title: "Proximamente",
    imgURL: "/imgServiceProximamente.png",
    href : "/servicios/manualidades/"
  },
  {
    title: "Proximamente",
    imgURL: "/imgServiceProximamente.png",
    href : "/servicios/proximamente/"
  },
]

export const ServicesList = () => {
  return (
    <>
      <h1 className='w-full text-center font-extrabold text-6xl xs:text-xl sm:text-2xl md:text-7xl lg:text-7xl my-10'>Nuestros servicios</h1>
      <p className='text-center my-10 font-Salmoon text-2xl'>A dia de hoy contamos con los siguientes servicios</p>
      <div className='flex flex-wrap p-2'>
        {Data.map((Data)=>(
          <div className='mx-auto lg:mx-auto'>
            <ServicesCard 
            title={Data.title}
            imgURL={Data.imgURL}
            href={Data.href}
            />
          </div>
        ))}
      </div>
    </>
  )
}
