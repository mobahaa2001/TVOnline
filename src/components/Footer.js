import React from 'react'
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container grid grid--footer">
          <div className="logo-col">
            <a href="#" className="footer-logo">
              <img src={logo} alt="Al-Ahly Academy" className="logo" />
            </a>
            <ul className="social-links">
              <li>
                <a href="#" className="footer-link">
                  <ion-icon
                    className="social-icon"
                    name="logo-instagram"
                    role="img"
                    aria-label="logo instagram"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <ion-icon
                    className="social-icon md hydrated"
                    name="logo-facebook"
                    role="img"
                    aria-label="logo facebook"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <ion-icon
                    className="social-icon md hydrated"
                    name="logo-twitter"
                    role="img"
                    aria-label="logo twitter"
                  ></ion-icon>
                </a>
              </li>
            </ul>
            <p className="copyright">
              Copyright &copy; 2022 by Guide. All rights reserved.
            </p>
          </div>
          <div className="address-col">
            <p class="footer-heading">Contact us</p>
            <address className="contacts">
              <p className="address">2st Monib-Giza-Egypt......etc.</p>
              <p>
                <a href="tel:01556121692" className="footer-link">
                  0155-612-1692
                </a>
                <br />
                <a href="mailto:mobahaa2001@gmail.com" className="footer-link">
                  mobahaa2001@gmail.com
                </a>
              </p>
            </address>
          </div>
          <nav className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">
              <li>
                <a href="#" className="footer-link">
                  Create account
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Sign in
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  iOS app
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Android app
                </a>
              </li>
            </ul>
          </nav>
          <nav className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
              <li>
                <a href="#" className="footer-link">
                  About TVOnline
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  For Business
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Training partners
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>
            </ul>
          </nav>
          <nav className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-nav">
              <li>
                <a href="#" className="footer-link">
                  Recipe directory
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Footer
