import React from "react";

function Stock({ id, name, price, ticker, type, onStockClick = f => f }) {
  return (
    <div>
      <div className="card" onClick={() => onStockClick(id)}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
