import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      <p>&copy; 2023 www.npisoftware.ir</p>
    </div>
  );
}

export default Footer;
