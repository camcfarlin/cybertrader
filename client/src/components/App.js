import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import Search from './SearchWidget/Search'
const Dashboard = () => <h2>Dashboard</h2>;
const NewTrade = () => <h2>Trade</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div classname="container">
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/portfolio" component={Dashboard} />
            <Route path="/portfolio/trade" component={NewTrade} />
            <Route path="/search" component={Search} />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
