import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Servicios } from "../pages/Servicios"
import { Nosotros } from "../pages/Nosotros"
import { Contacto } from "../pages/Contacto"
import { Dulces } from "../pages/Dulces"
import { Proximamente } from "../pages/Proximamente"
import { Personalizacion } from "../pages/Personalizacion"
import { Carro } from "../components/Carro"


export const AppRouter = () =>{

    
    return(
        <>
            <Routes>

                {/* BARRA DE NAVEGACION */ }

                <Route path="/" element={<Home/>} />
                <Route path="/nosotros/" element={<Nosotros/>}/>
                <Route path="/contacto/" element={<Contacto/>}/>
                <Route path="/carrito" element={<Carro/>}/>ww
                

                {/* SERVICIOS */}

                <Route path="/servicios/" element={<Servicios/>}/>
                <Route path="/servicios/dulces/" element={<Dulces/>}/>
                <Route path="/servicios/personalizacion/" element={<Personalizacion/>}/>
                <Route path="/servicios/proximamente/" element={<Proximamente/>}/>

                {/*  */}



            </Routes>
        </>
    )
}