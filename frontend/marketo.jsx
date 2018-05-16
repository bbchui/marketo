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
  }

  render() {
    return(
      <div id="wrapper" className="wrapper">
        <Header />
        <Fundamentals />
        <Featured />
        <Footer id="footer"/>
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Marketo />, root);
});
