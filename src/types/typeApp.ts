import { JSX } from "react";

export interface Productos{
  id: number;
  imgURL: string;
  name: string;
  price: number;
  discount: number;
  cantidad?: number
}

export interface Servicios {
    title: string,
    imgURL: string,
    href: string,
}

export interface Eventos{
  id: number;
  imgURL: string;
  name: string;
  description: string;
}

export interface valoresContexto {
  listCart: Productos[]
  addToCart: (item:Productos) => void
  restCarrito: (item:Productos) => void
  borrarCarrito: (item:Productos)=> void
  totalPagar: () => number
}

export interface children{
  children : JSX.Element | JSX.Element[]
}


