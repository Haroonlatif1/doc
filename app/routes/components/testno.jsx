function Testimonials() {
    return (
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">
  
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                    <h3>Anna Richardson</h3>
                    <h4>Parent of a Client</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Our experience with the speech therapy sessions here has been transformative. My child&apos;s ability to communicate has improved dramatically, and we feel truly supported by the entire team.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                    <h3>James Lee</h3>
                    <h4>Patient</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      The occupational therapy I&apos;ve received has enabled me to regain much of my independence after my injury. The personalized care and expert advice have made all the difference.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
  
              {/* Additional testimonials can be added here */}
              
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;
  