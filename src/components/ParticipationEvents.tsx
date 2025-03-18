import { Evento } from "../helpers/getData"
import { CardPartEvents } from "./CardPartEvents"

export const ParticipationEvents = () =>{
    return(
        <>
            <div className="w-full mt-20">
                <h1 className="text-center font-Salmoon font-extrabold
                text-6xl">¿En que eventos hemos participado?</h1>
            </div>
            <div className="grid grid-cols-3 gap-3">
                {Evento.map((Evento)=>(
                    <div className="">
                        <CardPartEvents
                        id={Evento.id}
                        imgURL={Evento.imgURL}
                        name={Evento.name}
                        description={Evento.description}
                        />
                    </div>
                ))
                   
                }
            </div>
        </>
    )
}