import React from "react";

// Components
import { Navbar } from '../src/components/Navbar'

const data = [
  { id: "1", productName: "todinho", productPrice: 3.5 },
  { id: "2", productName: "douritos", productPrice: 10 },
  { id: "3", productName: "pera", productPrice: 2 },
];

const ProductList: React.FC = () => {
  const handleInsertCart = () => {}

  return (
    <section className="container">
      <Navbar />
      <h2 className="text-center">Lista Produtos</h2>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Preço</th>
            <th scope="col" className="text-center">Opções</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p) => (
            <tr key={p.id}>
              <th scope="row">{p.productName}</th>
              <td>R${p.productPrice}</td>
              <td className="d-flex justify-content-around">
                <button className="btn rounded-circle btn-success" onClick={() => handleInsertCart()}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProductList;
