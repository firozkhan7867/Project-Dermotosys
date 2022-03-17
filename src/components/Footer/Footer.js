import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container '>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Get in touch today
        </p>
        <div className='flex flex-row'>
          <form>
            <input
              className='footer-input'
              name='text'
              type='text'
              placeholder='Your Email'
            />
          </form>
            <Button>Subscribe</Button>
        </div>
      </section>
      <div className='footer-links'>
        
        <div className='footer-link-wrapper'>
          
        <div className='footer-link-items'>
            <h2>CloudMd</h2>
            <div className="footer-text">
            Medicare Software and Services offers SAAS based health technology 
            solutions to medical clinics across Canada. The Company has 
            developed proprietary technology to deliver quality healthcare 
            through the combination of connected primary 
            care clinics, telemedicine.
            </div>
          </div>
        <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
          <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Company</Link>
            <Link to='/'>Managers</Link>
            <Link to='/'>Directors</Link>
            <Link to='/'>Advisors</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
          
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              MediCare
            </Link>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Footer;
