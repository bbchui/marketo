import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <footer>
        <ul>
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

          <li>
            <h3><a href='#join-us'>Join Us</a></h3>
            <a href='#careers'>Careers</a>
            <a href='#investors'>Investor Relations</a>

            <h3 className="languages"><a href='region'>Select Your Region</a></h3>
            <a href='#dutch'>Deutschland (Deutsch)</a>
            <a href='#french'>France (Français)</a>
            <a href='#australia'>Australia (English)</a>
            <a href='#uk'>United Kingdom (English)</a>
            <a href='#japanese'>日本（日本語)</a>
          </li>
        </ul>
      </footer>
    )
  }
}

export default Footer;
