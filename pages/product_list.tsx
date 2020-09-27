import React, { useContext, useEffect, useState } from "react";

// Components
import { Navbar } from "../src/components/Navbar";
import Axios from "axios";
import CartContext from "../src/context/CartContext";

const ProductList: React.FC = () => {
  const { products } = useContext(CartContext);

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await Axios.get("/api/handleGetProducts").then(
        (res) => res.data.products
      );
      setProductsList(req);
    }
    fetchData();
  }, [setProductsList]);

  const handleInsertCart = (p) => {
    const ids = products.map((p) => p._id);

    if (!ids.includes(p._id)) {
      products.push({...p, amount: 1});
    } else {
      products.filter(pr => pr._id === p._id ? pr.amount++ : pr)
    }
  };

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
          {productsList?.map((p) => (
            <tr key={p._id}>
              <th scope="row">{p.productName}</th>
              <td>R${p.productPrice}</td>
              <td className="d-flex justify-content-around">
                <button
                  className="btn rounded-circle btn-success"
                  onClick={() => handleInsertCart(p)}
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
