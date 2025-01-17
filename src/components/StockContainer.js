import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onStockBuy }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => <Stock key={stock.id} onStockClick={onStockBuy} {...stock} />)}
    </div>
  );
}

export default StockContainer;
