import React, { useEffect, useState } from "react";

// Components
import { Navbar } from '../src/components/Navbar'

const data = [
  { id: "1", productName: "todinho", productPrice: 3.5, amount: 3 },
  { id: "2", productName: "douritos", productPrice: 10, amount: 3 },
  { id: "3", productName: "pera", productPrice: 2, amount: 1 },
];

const ProductCart: React.FC = () => {
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const priceArr = data.map((item) => item.productPrice * item.amount);
    const totalValue = priceArr.reduce((acc, cur) => acc + cur, 0);
    setTotalValue(totalValue);
  }, []);

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
          {data.map((p) => (
            <tr key={p.id}>
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
