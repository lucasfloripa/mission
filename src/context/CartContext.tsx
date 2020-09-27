import { createContext } from "react";

interface Product {
  _id: string
  productName: string;
  productPrice: number;
  amount?: number
}

interface Cart {
  products: Product[];
}

const CartContext = createContext<Cart>({ products: [] });

export default CartContext;
