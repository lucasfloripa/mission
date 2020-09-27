import React, { useEffect, useState } from "react";
import { useCountRenders } from "../src/hooks/useCountRenders";

// Components
import { Navbar } from "../src/components/Navbar";
import Axios from "axios";

const ProductList: React.FC = () => {
  useCountRenders("ProductList");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await Axios.get("/api/handleGetProducts").then(
        (res) => res.data.products
      );
      setProducts(req);
    }
    fetchData();
  }, [setProducts]);

  const handleInsertCart = () => {};

  return (
    <section className="container">
      <Navbar />
      <h2 className="text-center">Lista Produtos</h2>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Preço</th>
            <th scope="col" className="text-center">
              Opções
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((p) => (
            <tr key={p.id}>
              <th scope="row">{p.productName}</th>
              <td>R${p.productPrice}</td>
              <td className="d-flex justify-content-around">
                <button
                  className="btn rounded-circle btn-success"
                  onClick={() => handleInsertCart()}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProductList;
