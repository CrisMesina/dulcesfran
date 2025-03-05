import { Nav } from '../components/Nav'
//import { HiOutlineMagnifyingGlassCircle } from 'react-icons/hi2'
import { DulcesCard } from '../components/DulcesCard'
import { Productos } from '../types/typeApp'

const Producto:Productos[] = [
    {
        imgURL: "/logo.png",
        name : "Alfajores sabor Frambuesa",
        price : 500,
        discount :0,
    },
    {
        imgURL: "/logo.png",
        name : "Alfajores sabor Manjar",
        price :  500,
        discount :0,
    },
    {
        imgURL: "/cuchufli-con-chocolate.png",
        name : "Cuchuflis con chocolate",
        price : 300,
        discount :0,
    },
    {
        imgURL: "/cuchufli-sin-chocolate.png",
        name : "Cuchuflis sin chocolate",
        price : 250,
        discount :0,
    },
    {
        imgURL: "/COCADAS.png",
        name : "Cocadas",
        price : 250,
        discount :0,
    },
    {
        imgURL: "/logo.png",
        name : "Donitas",
        price : 250,
        discount :0,
    },
    {
        imgURL: "/logo.png",
        name : "Vaso Gomitas 100g",
        price : 1000,
        discount :0,
    },
    {
        imgURL: "/logo.png",
        name : "Vaso Gomitas 200g",
        price : 2000,
        discount :0,
    },
    {
        imgURL: "/logo.png",
        name : "Brocheta Gomitas",
        price : 1000,
        discount :0,
    },


]



export const Dulces = () => {
  return (
    <>
        <Nav/>
        <div className="flex">
                {/* 
                <div className="absolute top-0 left-6 w-30 mt-24">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quisquam quas cumque repellendus officia commodi autem aperiam repudiandae sint porro inventore. Harum iusto ducimus eligendi voluptate ipsam est, quaerat possimus.
                </div>
                */}
                <div className="flex flex-wrap mx-36 mt-28">
                    {/* 
                    <div className="w-full mb-10 mx-10">
                        <a href="">
                            <HiOutlineMagnifyingGlassCircle 
                            className="absolute w-9 h-9 left-[590px] top-[111px]"/>
                        </a>
                        <input 
                            type="text" 
                            placeholder="¿Que deseas buscar?"
                            className="border rounded-2xl w-[450px] text-center p-1"
                            />
                    </div>
                    */} 
                    {
                        Producto.map(Producto =>(
                            <DulcesCard
                                imgURL={Producto.imgURL}
                                name={Producto.name}
                                price={Producto.price}
                                discount={Producto.discount}
                            />
                        ))
                    }
                </div>
            </div>
    </>
  )
}
