import { JSX } from "react";

export type Productos = {
  id: number;
  imgURL: string;
  name: string;
  price: number;
  discount: number;
  cantidad?: number
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

