export type ProductFetch = {
    products: ProductItem[],
    isLoading:boolean,
    isError:boolean,
}

export type ProductItem = {
    id:number,
    name: string,
    price:number,
    discount:number,
    comments:string,
}
export type Productos = {
    imgURL: string;
    name: string;
    price: number;
    discount: number;
  }





