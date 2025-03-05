import { ImageSliderHero } from "./ImageSliderHero";


export default function SliderShowCase(){
    const imagenes = [
        {imgURL: "/slider-hero.jpg", linkURL:"/", targetURL: "_self"},
        {imgURL: "/slider-hero.jpg", linkURL:"/servicios/",targetURL: "_self"},
        {imgURL: "/Slider-Comunícate-Dulces-Fran.jpg", linkURL:"https://www.instagram.com/dulcesfran._/",targetURL: "_blank"},
        {imgURL: "/slider-hero.jpg", linkURL:"/",targetURL: "_self"}

    ]
    return(
        <>
            <main className="w-full p-9 mx-auto">
                <ImageSliderHero slides={imagenes} />
            </main>
        </>
    )
}