import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="contact" id={this.props.id}>
        <a href="#contact-us">
          <span className="contact-box">Contact Us</span>
        </a>
      </section>
    )
  }
}

export default Contact
