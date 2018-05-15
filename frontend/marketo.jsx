import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import Fundamentals from './fundamentals'

class Marketo extends React.Component {
  render() {
    return(
      <div className="wrapper">
        <Header />
        <Fundamentals />
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Marketo />, root);
});
