import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends Component {
  renderContent () {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <NavItem href="/auth/google">
            Login with Google
          </NavItem>
        );
      default:
        return <NavItem href="/api/logout">Logout</NavItem>;
    }
  }
  render () {
    // console.log(this.props);
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link
              to={this.props.auth ? '/portfolio' : '/'}
              className="navbar-brand"
              href="/"
            >
              CyberTrader
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/about">
              About
            </NavItem>
            <NavItem eventKey={2} href="/search">
              Search
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>

          {this.renderContent ()}

        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps({auth}) {
  return {auth};
}
export default connect (mapStateToProps) (Header);

// return (
//   <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
//   <Link to={this.props.auth ? '/portfolio': '/'}
//     className="navbar-brand" href="/"
//     >
//     CyberTrader
//     </Link>
//     <button  className="navbar-toggler"
//       type="button"
//       data-toggle="collapse"
//       data-target="#navbarNavAltMarkup"
//       aria-controls="navbarNavAltMarkup"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div className="navbar-nav">
//         <a className="nav-item nav-link active" href="#">
//           Home <span className="sr-only">(current)</span>
//         </a>
//         <a className="nav-item nav-link" href="#">About Us</a>

//         {this.renderContent ()}

//       </div>
//     </div>
//   </nav>
