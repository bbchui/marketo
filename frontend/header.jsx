import React from 'react';
import marketo_logo from '../images/marketo_logo.png';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/fontawesome-free-solid";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  // add active underline

  render() {
    return(
      <header>
        <nav>
          <a className="logo" href="/home">
            <img className="logo" src={marketo_logo} />
          </a>
          <section>
            <div className="search-login">
              <a href="#search">
                <FontAwesomeIcon icon="search" size="lg"/>
              </a>
              <a href="#login">LOGIN</a>
            </div>
            <div className="menu">
              <a href="#solutions" className="menu-item">Solutions</a>
              <a href="#my_resources" className="menu-item">My Resources</a>
              <a href="#why_marketo" className="menu-item">Why Marketo</a>
              <a href="#view-demo" className="view-demo">VIEW DEMO <FontAwesomeIcon icon="play-circle" className="play-circle"/></a>
            </div>
          </section>
        </nav>
        <section className="fundamentals">
          <h2>Marketo University</h2>
          <h1>Fundamentals</h1>
          <p>Learn valuable digital engagement concepts from passionate thought leaders dedicated to your success.</p>
        </section>

      </header>
    )
  }
}

export default Header;
