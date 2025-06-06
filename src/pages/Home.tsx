import { useEffect } from "react"
import { Nav } from "../components/Nav"
import Swal from "sweetalert2"
import SliderShowCase from "../components/SliderShowCase"
import { ServicesList } from "../components/ServicesList"
import { Nosotros } from "./Nosotros"


export const Home = () => {

  useEffect(() =>{
    Swal.fire({
      title: "<strong>Importante leer</strong>",
      html: `
        Hoy en día contamos solo con la muestra de productos en la página web. <br>
        Con el tiempo, haremos la incorporación de un carrito de compras y también de los métodos de pago. 
        ¡Sean pacientes y gracias por contar con nosotros ♥</b>
       `,
      width: 750,
      background: "url(/bg.jpg)",
      imageWidth: 200,
      imageHeight :200,
      imageUrl : "/logo.png",
      showConfirmButton: true,
      confirmButtonText: "Entendido!",
      grow: "fullscreen",
      timer: 5000,
      timerProgressBar : true,
    })
  })


  return (
    <>
      <Nav/>
      <SliderShowCase/>
      <ServicesList/>
      <Nosotros/>
    </>
  )
}
