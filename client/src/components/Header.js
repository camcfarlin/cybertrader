import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null: 
        return;
      case false:
        return (
          <a class="nav-item nav-link" href="/auth/google">Login with Google</a>
        );
      default:
        return <a class="nav-item nav-link">Logout</a>;
    }
  }

  render () {
    // console.log(this.props);
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
        <a class="navbar-brand" href="/">CyberTrader</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">About Us</a>
           
              {this.renderContent()}
         
            {/* href temporary ^ */}
            {/* add to class - disabled */}
          </div>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({auth}) {
  return { auth};

}
export default connect(mapStateToProps) (Header);

