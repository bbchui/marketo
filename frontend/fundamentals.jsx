import React from 'react';
import img1 from '../images/marketo_img1.png';
import img2 from '../images/marketo_img2.png';
import img3 from '../images/marketo_img3.png';
import img4 from '../images/marketo_img4.png';

class Fundamentals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {img_number: 1};
  }

  showImage() {
    switch(this.state.img_number) {
      case 1:
        return(
          <figure>
            <img src={img1} />
            <p>Our management team’s years of experience are paving the way for our success.</p>
          </figure>

        );
      case 2:
        return(
          <figure>
            <img src={img1} />
            <p>We take care of our employees—our Team Purple, celebrating their diverse backgrounds, perspectives, and opinions.</p>
          </figure>
        );
      case 3:
        return(
          <figure>
            <img src={img1} />
            <p>We are committed to giving back to those that make the world a better place.</p>
          </figure>
        );
      case 4:
        return(
          <figure>
            <img src={img1} />
            <p>Take your marketing knowledge and Marketo skills to the next level with training, certification, and custom learning solutions.</p>
          </figure>
        );
    }
  }

  render() {
    return(
      <section className="fundamentals">
        <a href="/">Get Engaged / Marketo University / Training / Fundamentals</a>
        <div className="scroll-image">
          {this.showImage()}
        </div>
        <div className="">
        </div>

      </section>
    )
  }
}

export default Fundamentals;
