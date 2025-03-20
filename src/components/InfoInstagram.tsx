import { CiHeart } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import { TbSend } from "react-icons/tb";
import { IoMdMore } from "react-icons/io"; 

export const InfoInstagram =()=>{
    return(
        <>
            <div className="flex flex-col w-full h-[510px] mx-72 text-center m-20 mt-10 animate-fadeLeft">
                <h1 className="text-2xl">
                    Mediante nuestro
                    <a 
                        target="_blank" 
                        className="text-pink-500 font-Salmoon mx-1" 
                        href="https://www.instagram.com/dulcesfran._/">
                            Instagram
                    </a>
                </h1>
                <a href="https://www.instagram.com/dulcesfran._/" target="">
                    <div className="w-96 h-full mx-10 animate-fade rounded-3xl bg-[#2c2b2b]">
                        <div className="flex flex-wrap">
                            <img src="/logo.png" className="w-8 mx-2 my-2" alt="" />
                            <a href="https://www.instagram.com/dulcesfran._/" className="mt-3">
                                <span className="text-white">dulcesfran._</span>
                            </a>
                        </div>
                        <div>
                            <img src="/menu-dulces-fran.jpg" className="w-90" alt="" />
                        </div>
                        <div className="flex flex-wrap">
                            <div className="mx-auto">
                                <CiHeart className="text-white w-8 mt-1 p-1 h-8 hover:text-gray-600"/>
                            </div>
                            <div className="mx-auto">
                                <FiMessageCircle className="text-white w-8 mt-1 p-1 h-8 hover:text-gray-600"/>
                            </div>
                            <div className="mx-auto">
                                <TbSend className="text-white w-8 mt-1 p-1 h-8 hover:text-gray-600"/>
                            </div>
                            <div className="mx-auto">
                                <IoMdMore className="text-white w-8 mt-1 p-1 h-8 hover:text-gray-600"/>
                            </div>
                        </div>

                    </div>
                </a>
                
            </div> 
        </>
    )
}