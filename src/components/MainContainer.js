import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortType, setSortType] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
      .then(res => res.json())
      .then(setStocks)
  }, [])

  const handleStockBuy = (stockId) => {
    setPortfolio([...portfolio, stocks.find(stock => stock.id === stockId)])
  }
  const handleStockSell = (stockId) => {
    setPortfolio(portfolio.filter(stock => stock.id !== stockId))
  }
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }
  const handleSortChange = (e) => {
    setSortType(e.target.value);
  }
  const handleSort = (a, b) => {
    if (sortType === 'Price') return a.price - b.price;
    else return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
  }
  return (
    <div>
      <SearchBar sortType={sortType} filter={filter} onFilterChange={handleFilterChange} onSortTypeChange={handleSortChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks.filter(stock => filter === 'All' ? true : stock.type === filter).sort(handleSort)} onStockBuy={handleStockBuy} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onStockSell={handleStockSell} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
