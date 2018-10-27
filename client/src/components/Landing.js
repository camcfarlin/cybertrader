import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

const Landing = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">CyberTrader</h1>
        <p className="lead">
          Trading in a safe enviornment, Learn and compete with friends! Paper trading for newbs</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Landing;
