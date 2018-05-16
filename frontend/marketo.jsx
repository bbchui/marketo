import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import Fundamentals from './fundamentals';
import Footer from './footer';
import Contact from './contact';
import Featured from './featured';

class Marketo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {position: 'position'};
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      let footer = document.getElementById('footer').offsetTop;
      let x = window.innerHeight;
      let y = window.pageYOffset;

      if (x + y >= footer) {
        this.setState({position: 'fixed'});
      } else {
        this.setState({position: 'position'});
      }
    });
  }

  render() {
    return(
      <div className="wrapper">
        <Header />
        <Fundamentals />
        <Featured />
        <Footer id="footer"/>
        <Contact id={this.state.position} />
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Marketo />, root);
});
