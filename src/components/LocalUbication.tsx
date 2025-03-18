export const LocalUbication = () =>{
    return(
        <>
            <div className="w-full h-screen ">
                <h1 className="text-center font-Salmoon text-7xl font-extrabold">¿Donde estamos ubicados?</h1>
                <div className="flex flex-wrap">
                    <div className="mx-10 mt-10">
                        <iframe className="w-96 h-[450px] rounded-xl " src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Coltauco&t=h&z=16&ie=UTF8&iwloc=B&output=embed"></iframe>
                    </div>
                    <div className="mx-10 mt-24">
                        <p className="p-4 w-[650px] text-xl">
                            Actualmente no contamos con sucursales ya que es el inicio de un emprendimiento y es todo realizado en casa
                            por las personas que empezaron con este mismo.
                            <p>
                                Con el tiempo cuando contemos con una sucursal o una tienda. La ubicacion mostrada se actualizara y con eso podran ir a hacer sus pedidos
                                de forma presencial. O tambien podran retirar sus productos en esta misma.
                            </p>
                            <p>
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