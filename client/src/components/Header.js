import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component {
  renderContent () {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a className="nav-item nav-link" href="/auth/google">
            Login with Google
          </a>
        );
      default:
        return <a className="nav-item nav-link" href="/api/logout">Logout</a>;
    }
  } 
    render () {
    // console.log(this.props);
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">      
      <Link to={this.props.auth ? '/portfolio': '/'}
        className="navbar-brand" href="/"
        >
        CyberTrader
        </Link>
        <button  className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">About Us</a>

            {this.renderContent ()}

            {/* href temporary ^ */}
            {/* add to className - disabled */}
          </div>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({auth}) {
  return {auth};
}
export default connect (mapStateToProps) (Header);
