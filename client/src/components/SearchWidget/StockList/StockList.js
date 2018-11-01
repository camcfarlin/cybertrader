import React from 'react';
import StockListItem from '../StockListItem/StockListItem';
import './StockList.css';


const StockList = (props) => {

  const stockItem = props.stockItems.map((stock) => {
    
      return (
        <StockListItem key={ stock.symbol }
                       symbol={ stock.symbol }
                       price={ stock.price }
                       volume={ stock.volume }
                       timestamp={ stock.timestamp } />
      );
  });

  return (
    <ul className="StockList">
      { stockItem }
    </ul>
  )
}

export default StockList;


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