export const LocalUbication = () =>{
    return(
        <>
            <div className="w-full h-screen ">
                <h1 className="text-center font-Salmoon text-7xl font-extrabold">¿Donde estamos ubicados?</h1>
                <div className="flex flex-wrap">
                    <div className="mx-auto my-5">
                        <iframe className="w-80 xs:w-96 lg:w-20 xl:w-115 2xl:w-171 h-112 md:h-141 rounded-xl" 
                        src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Coltauco&t=h&z=16&ie=UTF8&iwloc=B&output=embed"
                        >
                        </iframe>
                    </div>
                    <div className="mx-auto my-15 xl:my-20 xl:mr-20 2xl:mr-30 text-center">
                        <p className="w-80 xs:w-96 xl:w-151 text-xl xl:text-2xl font-bold text-center">
                            Actualmente no contamos con sucursales ya que es el inicio de un emprendimiento y es todo realizado en casa
                            por las personas que empezaron con este mismo.
                            <p className="p-1">
                                Con el tiempo cuando contemos con una sucursal o una tienda. La ubicacion mostrada se actualizara y con eso podran ir a hacer sus pedidos
                                de forma presencial. O tambien podran retirar sus productos en esta misma.
                            </p>
                            <p className="p-1">
                                Hoy en dia, aunque no contemos con una tienda o una sucursal como tal, hacemos pedidos por los alrededores de la ubicacion (Coltauco).
                                Los cuales tendran un pequeño costo de envio. 
                            </p>
                        </p>

                    </div>
                </div>
                
            </div>
        </>
    )
}