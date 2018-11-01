import React from 'react';
import './style.css';

const Portfolio = props => {
    return (
   
        <div className="row" id="box">
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
                <tbody>
                <tr>
                        <th>BAC</th>
                        <th>10.20</th>
                        <th>10.19</th>
                        <th>10%</th>
                        <th>10.21</th>
                        <th>10.18</th>
                        <th>Unwatch</th>
                    </tr>
                </tbody>
            </table>
            </div>
    );
  };
export default Portfolio;