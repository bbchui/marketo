import React from 'react';
import marketo_logo from '../images/marketo_logo.png';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/fontawesome-free-solid";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <header>
        <nav>
          <img className="logo" src={marketo_logo} />
          <section>
            <div className="search-login">
              <a href="#search">
                <FontAwesomeIcon icon="search" size="lg"/>
              </a>
              <a href="#login">LOGIN</a>
            </div>
            <div className="menu">
              <a href="#solutions">Solutions</a>
              <a href="#my_resources">My Resources</a>
              <a href="#why_marketo">Why Marketo</a>
              <a href="#view-demo">View Demo</a>
            </div>
          </section>
        </nav>
      </header>
    )
  }
}

export default Header;
