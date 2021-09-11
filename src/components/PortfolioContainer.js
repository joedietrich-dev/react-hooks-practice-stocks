import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio = [], onStockSell = f => f }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolio.map(stock => <Stock key={stock.id} onStockClick={onStockSell} {...stock} />)
      }
    </div>
  );
}

export default PortfolioContainer;
