

export interface Productos{
  id: number,
  imgURL: string,
  name: string,
  price: number,
  description: string,
  cantidad: number,
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

export type SectionContact = "instagram" | "whatsapp" | "correo" | null


