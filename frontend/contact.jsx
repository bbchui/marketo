import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <section className="contact" id={this.props.id}>
        <span className="contact-box">Contact Us</span>
      </section>
    )
  }
}

export default Contact
