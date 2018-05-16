import React from 'react';
import marketo_logo from '../images/marketo_logo.png';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/fontawesome-free-solid";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: '',
                  extra: 'extra'};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let wrapper = document.getElementById('wrapper');
    if (this.state.visible === '') {
      this.setState({visible: 'visible'});
      wrapper.className += " pushed"
    } else {
      this.setState({visible: ''});
      wrapper.className = "wrapper"
    }
  }

  render() {
    return(
      <header>
        <nav>
          <a className="logo" href="#">
            <img className="logo" src={marketo_logo} />
          </a>
          <section>
            <div className="search-login">
              <a href="#search">
                <FontAwesomeIcon icon="search" size="lg"/>
              </a>
              <a href="#login">LOGIN</a>
            </div>
            <div className={'menu ' + this.state.visible} id="sidebar">
              <a href="#solutions" className="menu-item">Solutions</a>
              <a href="#my_resources" className="menu-item">My Resources</a>
              <a href="#why_marketo" className="menu-item">Why Marketo</a>
              <a href="#view-demo" className="view-demo">VIEW DEMO <FontAwesomeIcon icon="play-circle" className="play-circle"/></a>
              <a className={this.state.extra} href="#login">Login</a>
              <a className={this.state.extra} href="#contact">Contact</a>

            </div>
          </section>
          <div id="sidebar-btn" onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <section className="header-titles">
          <h2 className="extra2">Marketo University</h2>
          <h1>Fundamentals</h1>
          <p>Learn valuable digital engagement concepts from passionate thought leaders dedicated to your success.</p>
        </section>
      </header>
    )
  }
}

export default Header;
