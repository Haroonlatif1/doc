
function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Therapist Clinic</h3>
              <p>
                A108 Therapist Street <br />
                New York, NY 535022<br />
                United States <br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@therapistclinic.com<br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="www">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="www">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="www">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="www">Terms of service</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="www">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="www">Speech Therapy</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="www">Occupational Therapy</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="www">Behavior Therapy</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="www">Cognitive Therapy</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="www">Family Therapy</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>Stay updated with our latest news and updates</p>
              <form action="" method="post">
                <input type="email" name="email" placeholder="Enter your email" /><input type="submit" value="Subscribe" />
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">

        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; 2024 <strong><span>Therapist Clinic</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://haroonlatif.netlify.app">Haroon tech</a>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="www" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="www" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="www" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="www" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
