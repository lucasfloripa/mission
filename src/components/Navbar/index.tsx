import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item py-2 px-5">
            <Link href="/product_register">
              <a>Cadastro Produto</a>
            </Link>
          </li>
          <li className="nav-item py-2 px-5">
            <Link href="/product_list">
              <a>Lista Produto</a>
            </Link>
          </li>
          <li className="nav-item py-2 px-5">
            <Link href="/product_cart">
              <a>Carrinho</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
