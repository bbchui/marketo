import React from 'react';
import img1 from '../images/marketo_img1.png';
import img2 from '../images/marketo_img2.png';
import img3 from '../images/marketo_img3.png';

class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section id="featured-stories">
        <div className="featured-stories">
          <h2>Featured Stories</h2>
          <ul>
            <li>
              <img src={img1} />
              <h3>Marketo CEO: "We're the best in Marketing Automation"</h3>
              <h5>The Economist</h5>
              <span className="date">2/13/17</span>
              <div>
                <a href="#read-now">Read Now</a>
              </div>
            </li>

            <li>
              <img src={img2} />
              <h3>Marketo CEO: "We're the best in Marketing Automation"</h3>
              <h5>The Economist</h5>
              <span className="date">2/13/17</span>
              <div>
                <a href="#read-now">Read Now</a>
              </div>
            </li>

            <li>
              <img src={img3} />
              <h3>Marketo CEO: "We're the best in Marketing Automation"</h3>
              <h5>The Economist</h5>
              <span className="date">2/13/17</span>
              <div>
                <a href="#read-now">Read Now</a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Featured;
