import { FaInstagram, FaWhatsapp } from "react-icons/fa"

export const PersonalInfo = () =>{



    return(
        <>
            {/* Contenedor general */}
            <div className='flex w-full mt-10'>
                {/* Contenedor imagen */}
                <div className='w-[500px] mx-20'>
                   <img src="/nosotros-fran-img.jpg" className='w-96 h-auto mx-auto my-10 object-cover rounded-2xl' alt="Foto de la persona que inicio/creo la Pyme o emprendimiento DulcesFran" />
                </div>
                {/* Contenedor de informacion */}
                <div className='w-[500px]'>
                    <h1 className='font-Salmoon text-5xl text-center font-extrabold'>Sobre Nosotros</h1>
                    <p className="p-4 text-xl">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ab, similique dolore enim quibusdam molestias quia labore totam possimus, iure dicta adipisci porro fugiat praesentium reiciendis odit animi, dignissimos soluta?
                        Porro dolor fugit reiciendis ullam corporis ipsam architecto tempora velit magni consequatur voluptatem enim placeat atque labore vel, harum vitae. Aliquam voluptatum ex, repellendus temporibus ullam debitis excepturi provident iure?
                        Sequi ab, dolor placeat magnam at tempore nostrum culpa, inventore deleniti sunt voluptates sit. In, soluta ipsa, minus sed ea incidunt ipsam id esse neque, atque eaque reprehenderit aliquam adipisci.
                        Magni, cupiditate repudiandae, nesciunt minus reprehenderit sunt similique placeat exercitationem, soluta error culpa odio dicta corrupti tempore nisi laudantium eum consequatur sapiente velit delectus corporis. Quos, quaerat error! Quis, perspiciatis?
                        Magnam voluptatibus quisquam rem ab maiores, et magni praesentium. Dicta, porro! Modi provident unde corrupti quis aut enim adipisci ab maiores iusto tempora, recusandae distinctio! Laboriosam ducimus suscipit magnam perspiciatis?
                        Quasi incidunt vel repellendus illo facere porro maxime expedita eveniet? Neque totam asperiores molestias, voluptate vitae officia at, sapiente esse aliquid dolor ducimus, voluptates alias rem maiores praesentium nam itaque.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                        <a href='https://www.instagram.com/dulcesfran._/' target="_blank" className='flex flex-wrap p-2 border mt-1 text-center rounded-xl mx-auto
                            bg-gradient-to-b from-purple-500 to-pink-500 text-white'>
                            <FaInstagram className=' mx-2 w-5 h-5'/>
                            <span>Instagram</span>
                        </a>
                        <a href='https://wa.me/56972431830' target="_blank" className='flex flex-wrap p-2 border mt-1 text-center rounded-xl mx-auto
                            bg-gradient-to-b from-purple-500 to-pink-500 text-white'>
                            <FaWhatsapp className=' mx-2 w-5 h-5'/>
                            Whatsapp
                        </a>
                    </div>
                </div>

            </div>

        </>
    )
}