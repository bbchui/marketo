import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';

class Marketo extends React.Component {
  render() {
    return(
      <div className="wrapper">
        <Header />
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Marketo />, root);
});
