import { ImageSliderHero } from "./ImageSliderHero";


export default function SliderShowCase(){
    const imagenes = [
        {imgURL: "/slider-hero.jpg", linkURL:"/servicios/", targetURL: "_self"},
        {imgURL: "/slider-mother-day.jpg", linkURL:"/servicios/",targetURL: "_self"},
        {imgURL: "/Slider-Comunícate-Dulces-Fran.jpg", linkURL:"https://www.instagram.com/dulcesfran._/",targetURL: "_blank"},

    ]
    return(
        <>
            <main className="w-full mt-14 p-9 mx-auto">
                <ImageSliderHero slides={imagenes} />
            </main>
        </>
    )
}