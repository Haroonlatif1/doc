function DoctorsSection() {
    return (
      <section id="doctors" className="doctors">
        <div className="container">
          <div className="section-title">
            <h2>Doctors</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src="assets/img/doctors/doctors-1.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Medical Officer</span>
                  <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                  <div className="social">
                    <a href="ww"><i className="ri-twitter-fill"></i></a>
                    <a href="ww"><i className="ri-facebook-fill"></i></a>
                    <a href="ww"><i className="ri-instagram-fill"></i></a>
                    <a href="ww"> <i className="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat the above structure for other doctors */}
          </div>
        </div>
      </section>
    );
  }
  
  export default DoctorsSection;
  