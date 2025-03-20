import { Nav } from "../components/Nav"
import { ToggleSelectionContact } from "../components/ToggleSelectionContact"



export const Contacto = () => {

  

  return (
    <>
      <Nav/>
      <div className="w-full h-screen mt-20">
        <h1 className="text-center text-6xl font-Salmoon font-extrabold ">¿Como puedes ponerte en contacto con nosotros?</h1>
         <div className="flex">
          <ToggleSelectionContact/>
         </div>
      </div>
    </>
  )
}
