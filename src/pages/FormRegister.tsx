import axios from "axios"
import React, { useState } from "react"
import { Nav } from "../components/Nav"
import Swal from "sweetalert2"

export const FormRegister = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Toast = Swal.mixin({

        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast)=>{
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      })
    

    const handleSubmit = async(e: React.FormEvent) =>{
        e.preventDefault()
        try{
            const response = await axios.post('http://127.0.0.1:8000/register',{
                username,
                email,
                password
            })
            console.log("Datos creados: " +response.data)
            Toast.fire({
                icon:"success",
                title: "Creacion de usuario procesada con exito! Inicia sesion.."
            })           

            setTimeout(() =>{
                location.href = "/ingresar"
            }, 3000)
            
        }catch{
            Toast.fire({
                icon:"warning",
                title: "Acaba de ocurrir un error! Comprueba que los datos esten bien"
              })
              location.href = "/registrar/"
        }
    }
    
    
    return (
        <>
            <Nav/>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-28">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                    Usuario:
                    </label>
                    <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email:
                    </label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                    Contraseña:
                    </label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                    Registrarse
                    </button>
                </div>
            </form>
        </>    
    )
}
