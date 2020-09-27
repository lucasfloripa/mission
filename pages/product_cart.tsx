import React, { useEffect, useState, useContext } from "react";
import CartContext from "../src/context/CartContext";

// Components
import { Navbar } from "../src/components/Navbar";

const ProductCart: React.FC = () => {
  const [totalValue, setTotalValue] = useState(0);

  const { products } = useContext(CartContext);

  useEffect(() => {
    const priceArr = products.map((item) => item.productPrice * item.amount);
    const totalValue = priceArr.reduce((acc, cur) => acc + cur, 0);
    setTotalValue(totalValue);
  }, [products, setTotalValue]);

  return (
    <section className="container">
      <Navbar />
      <h2 className="text-center">Carrinho</h2>
      <h3 className="text-center text-success">R${totalValue}</h3>
      <table className="table mt-5 w-50 mx-auto text-center">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((p) => (
            <tr key={p._id}>
              <th scope="row">{p.productName}</th>
              <td>{p.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProductCart;
