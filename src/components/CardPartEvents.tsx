import { Eventos } from "../types/typeApp"

export const CardPartEvents:React.FC<Eventos> = ({imgURL, name, description}) =>{
    return(
        <>
            <div className="w-96 mx-5 drop-shadow bg-white shadow-2xl mt-20 mb-10 rounded-3xl">
                <div>
                    <img src={imgURL} 
                        alt="Imagen representativa del evento al que se asistio."
                        className="w-full h-96 mx-auto rounded-3xl object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-center text-5xl mt-10 font-Salmoon font-extrabold">{name}</h1>
                </div>
                <div>
                    <p className="text-center p-5">"{description}"</p>
                </div>
            </div>
        </>
    )
}