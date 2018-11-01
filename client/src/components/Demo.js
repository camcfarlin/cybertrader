import React from 'react';
import Search from './SearchWidget/Search';
import Portfolio from './Portfolio/Portfolio';
import {Grid, Col, Row} from 'react-bootstrap';

const demo = props => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col xs={6} md={4}>
          <code>{Search}</code>
        </Col>
        <Col xs={6} md={4}>
          <code>{Portfolio}</code>
        </Col>
      </Row>
    </Grid>
  );
};

export default demo;

{
  /* <Grid>
<div>
  {Search}
  {Portfolio}
</div>
</Grid> */
}
