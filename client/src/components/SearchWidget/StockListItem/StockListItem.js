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



{/* <div className="row">
<table className="table-hover">
    <thead>
        <tr>
            <th>Symbol</th>
            <th>Open</th>
            <th>Last</th>
            <th>Change</th>
            <th>High</th>
            <th>Low</th>
            <th>Unwatch</th>
        </tr>
    </thead>
    </table>
    </div> */}