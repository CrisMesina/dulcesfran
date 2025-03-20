import { useState } from "react"
import { SectionContact } from "../types/typeApp"
import { InfoInstagram } from "./InfoInstagram"
import { InfoWhatsapp } from "./InfoWhatsapp"
import { InfoCorreo } from "./InfoCorreo"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { NullSelectionContact } from "./NullSelectionContact"



export const ToggleSelectionContact = () => {
    const [activeSection, setActiveSection] = useState<SectionContact>(null)
    
      const toggleSection = (sectionContact : SectionContact)=>{
        if (activeSection === sectionContact){
          setActiveSection(null)
        }else{
          setActiveSection(sectionContact)
        }
    }
    return(
        <>
            <div className="flex flex-col mt-20">
                <div className="">
                    <button
                    className={`p-5 border-b w-32 rounded-tr-2xl 
                        ${activeSection === "instagram" ? "bg-pink-200" : "bg-pink-100 text-white"}`}
                    onClick={()=> toggleSection("instagram")}>
                    <FaInstagram className="w-10 h-10 mx-auto" fill="#D43089"/>
                    </button>
                </div>
                <div>
                    <button
                    className={`p-5 border-b w-32 hover:bg-red-400
                        ${activeSection === "whatsapp" ? "bg-pink-200" : "bg-pink-100 text-white"}`}
                    onClick={()=> toggleSection("whatsapp")}>
                    <FaWhatsapp className="w-10 h-10 mx-auto" fill="#4CBB17"/>
                    </button>
                </div>
                <div>
                    <button
                    className={`p-5 border-b w-32 rounded-br-2xl hover:bg-red-400 
                        ${activeSection === "correo" ? "bg-pink-200" : "bg-pink-100 text-white"}`}
                    onClick={()=> toggleSection("correo")}>
                    <BiLogoGmail className="w-10 h-10 mx-auto" fill="red"/>
                    </button>
                </div>
            </div>
            <div className="flex">
                
                {activeSection === null &&(
                    <NullSelectionContact/>
                )}

                {activeSection === "instagram"&&(
                    <InfoInstagram/>
                )}

                {activeSection === "whatsapp"&&(
                    <InfoWhatsapp/>
                )}

                {activeSection === "correo"&&(
                    <InfoCorreo/>
                )}
            </div>
        </>
    )
}