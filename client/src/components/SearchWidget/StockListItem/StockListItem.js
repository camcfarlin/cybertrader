import React from 'react';
import './StockListItem.css';

const StockListItem = (stock, props) => {

  return (
    <table className="StockListItem">
    <thead>
      <th className="StockListItem_Symbol"><span>Stock: </span>{ stock.symbol }</th>
      <th className="StockListItem_Price"><span>Price: </span>${ parseInt(stock.price).toFixed(2) }</th>
      <th className="StockListItem_Volume"><span>Vol: </span>{ stock.volume }</th>
      <th className="StockListItem_Time"><span>Time: </span>{ stock.timestamp }</th>
      </thead>
    </table>
  )
}
export default StockListItem;
