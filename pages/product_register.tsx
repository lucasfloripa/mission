import React, { useState } from "react";

// Components
import { Navbar } from '../src/components/Navbar'

const ProductRegister: React.FC = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleRegisterProduct = () => {};

  return (
    <section className="container">
      <Navbar />
      <h2 className="text-center">Registrar Produto</h2>
      <form
        className="mt-5 w-25 mx-auto"
        onSubmit={() => handleRegisterProduct()}
      >
        <div className="form-group">
          <label htmlFor="productName">Nome do Produto</label>
          <input
            className="form-control"
            type="text"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Preço</label>
          <input
            className="form-control"
            type="text"
            name="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <button className="btn btn-success">Registrar</button>
      </form>
    </section>
  );
};

export default ProductRegister ;
