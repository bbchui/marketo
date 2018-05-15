import React from 'react';
import img1 from '../images/marketo_img1.png';
import img2 from '../images/marketo_img2.png';
import img3 from '../images/marketo_img3.png';
import img4 from '../images/marketo_img4.png';

class Fundamentals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {img_number: 1,
                  step_1: 'active focus',
                  step_2: '',
                  step_3: '',
                  step_4: ''
                };
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  nextImage(e) {
    e.preventDefault();
    let num = this.state.img_number
    if (num === 1) {
      this.setState({img_number: 2,
                    step_1: 'active',
                    step_2: 'active focus'
                  });
    } else if (num === 2) {
      this.setState({img_number: 3,
                    step_2: 'active',
                    step_3: 'active focus'
                  });
    } else if (num === 3) {
      this.setState({img_number: 4,
                    step_3: 'active',
                    step_4: 'active focus'
                  });
    }
  }

  prevImage(e) {
    e.preventDefault();
    let num = this.state.img_number
    if (num === 4) {
      this.setState({img_number: 3,
                    step_4: '',
                    step_3: 'active focus'
                  });
    } else if (num === 3) {
      this.setState({img_number: 2,
                    step_3: '',
                    step_2: 'active focus'
                  });
    } else if (num === 2) {
      this.setState({img_number: 1,
                    step_2: '',
                    step_1: 'active focus'
                  });
    }
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
            <img src={img2} />
            <p>We take care of our employees—our Team Purple, celebrating their diverse backgrounds, perspectives, and opinions.</p>
          </figure>
        );
      case 3:
        return(
          <figure>
            <img src={img3} />
            <p>We are committed to giving back to those that make the world a better place.</p>
          </figure>
        );
      case 4:
        return(
          <figure>
            <img src={img4} />
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
          <ul className="progressbar">
            <li className={this.state.step_1}>Learn</li>
            <li className={this.state.step_2}>Watch</li>
            <li className={this.state.step_3}>Do</li>
            <li className={this.state.step_4}>Check</li>
          </ul>
          {this.showImage()}
          <div className="next-steps">
            <button onClick={this.prevImage}>Back</button>
            <div>{this.state.img_number}/4</div>
            <button onClick={this.nextImage}>Next</button>
          </div>
        </div>


      </section>
    )
  }
}

export default Fundamentals;
