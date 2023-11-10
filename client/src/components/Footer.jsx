import React from 'react'
import '../assets/styles/footer.css'

const Footer = () => {
  return (
    <>
    <footer className="homeFooter">
      <a className="logo" href="../src/index.html">PropertyWala</a>
      <div className="wrapper">
        <div className="child-wrapper">
          <div className="not-show"></div>
          <div className="footer-section">
            <h5>SELL A HOME</h5>
            <p>Request an offer</p>
            <p>Pricing</p>
            <p>Reviews</p>
            <p>Stories</p>
          </div>
          <div className="footer-section">
            <h5>BUY A HOME</h5>
            <p>Buy</p>
            <p>Finance</p>
          </div>
          <div className="footer-section">
            <h5>BUY, RENT AND SELL</h5>
            <p>Buy and sell properties</p>
            <p>Rent home</p>
            <p>Builder trade-up</p>
          </div>
        </div>

        <div className="child-wrapper">
          <div className="not-show"></div>
          <div className="footer-section">
            <h5>TERMS & PRIVACY</h5>
            <a href="/trust-and-safety"><p>Trust & Safety</p></a>
            <a href="terms-of-service"><p>Terms of Service</p></a>
            <a href="privacy-policy"><p>Privacy Policy</p></a>
          </div>
          <div className="footer-section">
            <h5>ABOUT</h5>
            <p>Company</p>
            <p>How it works</p>
            <p>Contact</p>
            <p>Investors</p>
          </div>
          <div className="footer-section">
            <h5>RESOURCES</h5>
            <a href="/blogs"><p>Blog</p></a>
            <a href="/help"><p>Guides</p></a>
            <a href="/FAQ"><p>FAQ</p></a>
            <a href="/help"><p>Help Center</p></a>
          </div>
        </div>
      </div>

      <div className="commonFooter">
        <span>PropertyWala</span>
        <div className="contactIcons">
          <span><i className="fa-brands fa-facebook-f"></i></span>
          <span><i className="fa-brands fa-instagram"></i></span>
          <span><i className="fa-brands fa-twitter"></i></span>
          <span><i className="fa-brands fa-linkedin"></i></span>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer