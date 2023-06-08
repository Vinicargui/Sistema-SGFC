import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Principal() {
  return (
    <div className="containerb">
      <ul className="titulos">
        <Link className="link" to="/funcionario">
          <li>funcionario</li>
        </Link>
        <Link className="link" to="/cliente">
          <li>cliente</li>
        </Link>
        <Link className="link" to="/agenda">
          <li>Agenda</li>
        </Link>
        <Link className="link" to="/procedimento">
          <li>Procedimento</li>
        </Link>
        <Link className="link" to="/venda">
          <li>Vendas</li>
        </Link>
        <Link className="link" to="/lista">
          <li>listagem</li>
        </Link>
      </ul>
    </div>
  );
}

export default Principal;
