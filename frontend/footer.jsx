import React from 'react';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import Contact from './contact';

const vert = {verticalAlign: 'text-bottom',
              fontSize: '1.1em'};

class Footer extends React.Component {
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
      <footer id={this.props.id}>
        <Contact id={this.state.position}/>
        <ul className="footer-1">
          <li>
            <h3>Marketing <br/> headquarters</h3>
            <p>901 Mariners Island Blvd.</p>
            <p>Suite #500 (Reception)</p>
            <p>San Mateo, CA 94404</p>
            <h4 className="separate"><strong>+1.877.260.MKTO (6586)</strong></h4>
          </li>

          <li>
            <h3><a href='#solutions'>Solutions</a></h3>
            <h4><a href='#eng-platform'>Engagement Platform</a></h4>
            <a href='#eng-hub'>Engagement Hub</a>
            <a href='#eng-app'>Engagement Apps</a>

            <h4 className="separate"><a href='#interests'>Interests</a></h4>
            <a href='#management'>Lead Management</a>
            <a href='#ccm'>Cross-Channel Marketing</a>
            <a href='#life-market'>Lifecycle Marketing</a>
            <a href='#abm'>Account-Based Marketing</a>
            <a href='#email-market'>Email Marketing</a>
            <a href='#market-auto'>Marketing Automation</a>
            <a href='#pricing'>Pricing</a>

            <h4 className="separate"><a href='#industries'>Industries</a></h4>
            <a href='#fin-health'>Financial Health</a>
            <a href='#healthcare'>Healthcare</a>
            <a href='#manufacturing'>Manufacturing</a>
            <a href='#technology'>Technology</a>
          </li>

          <li>
            <h3><a href='#get-engaged'>Get Engaged</a></h3>
            <h4><a href='#community'>Community</a></h4>
            <h4><a href='#marketo-university'>Marketo University</a></h4>
            <h4><a href='#launchpoint' className="corner"LaunchPoint>LaunchPoint</a></h4>
            <h4 className="separate"><a href='#blogs'>Blogs</a></h4>
            <a href='#market-blog'><span  className="corner">Marketo Blog</span></a>
            <a href='#developer-blog'><span  className="corner">Developer Blog</span></a>
            <a href='#cmo-nation'>CMO Nation</a>
            <h4 className="separate"><a href='#resources'>More Resources</a></h4>
          </li>

          <li>
            <h3><a href='#why-marketo'>Why Marketo</a></h3>
            <h4><a href='#company'>Company</a></h4>
            <h4><a href='#leadership'>Leadership</a></h4>
            <h4><a href='#news'>News</a></h4>
            <h4><a href='#service-support'>Service & Support</a></h4>
            <h4><a href='#trust'>Trust</a></h4>
          </li>

          <li className="footer-resize">
            <div>
              <h3><a href='#join-us'>Join Us</a></h3>
              <a href='#careers'>Careers</a>
              <a href='#investors'>Investor Relations</a>
            </div>

            <div className="added">
              <h4><a href='#company'>Trust</a></h4>
              <h4><a href='#resources'>Resources</a></h4>
              <h4><a href='case-studies'>Case Studies</a></h4>
              <h4>+1.877.260.6586</h4>
            </div>

            <div>
              <h3 className="languages"><a href='region'>Select Your Region</a></h3>
              <a href='#dutch'>Deutschland (Deutsch)</a>
              <a href='#french'>France (Français)</a>
              <a href='#australia'>Australia (English)</a>
              <a href='#uk'>United Kingdom (English)</a>
              <a href='#japanese'>日本（日本語)</a>
            </div>
          </li>
        </ul>

        <section className="footer-2">
          <div className="additional">
            <article>
              <p>Recent searches. Direct Lead Generation, Internet Marketing Promotion, Lead Generation Online, Lead Generation Business Plan, B2B Lead Generation Companies, Education Lead Generation, Advertising Marketing Strategy, Effective Lead Nurturing, Sale Lead Generation, Email Marketing Platform</p>
              <p>© Copyright 2017, Marketo, Inc. All rights reserved.
              <a href="legal">Legal</a> |
              <a href="privacy">Privacy</a> |
              <a href="cookies">Cookies</a> |
              <a href="eusa">EUSA</a> |
              <a href="trust-marketo">Trust.Marketo.com</a>
              </p>
            </article>
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/Marketo" target="_blank">
                  <FaFacebook className="icon" style={vert}/>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Marketo" target="_blank">
                  <FaTwitter className="icon" style={vert}/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/236175" target="_blank">
                  <FaLinkedin className="icon" style={vert}/>
                </a>
              </li>

            </ul>
          </div>
        </section>
      </footer>
    )
  }
}

export default Footer;
