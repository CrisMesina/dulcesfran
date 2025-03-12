import { Nav } from "../components/Nav"
import { ServicesList } from "../components/ServicesList"


export const Servicios = () => {

    return(
        <>
            <Nav/>
            <div className="mt-24">
                <ServicesList/>
            </div>
        </>
    )
    
}
