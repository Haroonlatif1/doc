function ServicesSection() {
    return (
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>At Lahore Speech Therapy Clinic, we offer a comprehensive range of services to address various speech and language disorders.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-heartbeat"></i></div>
                <h4><a href="#service1">Speech Clarity Enhancement</a></h4>
                <p>We help improve speech clarity through targeted exercises and techniques, enhancing communication skills.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-pills"></i></div>
                <h4><a href="#service2">Stuttering Management</a></h4>
                <p>Our therapy programs are designed to help individuals manage and overcome stuttering challenges effectively.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-hospital-user"></i></div>
                <h4><a href="#service3">Language Development</a></h4>
                <p>We provide comprehensive support for language development, focusing on improving vocabulary, grammar, and comprehension.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-microphone-alt"></i></div>
                <h4><a href="#service4">Voice Therapy</a></h4>
                <p>Our voice therapy sessions aim to address voice disorders such as hoarseness, pitch, and volume control issues.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-headset"></i></div>
                <h4><a href="#service5">Auditory Processing Therapy</a></h4>
                <p>We offer specialized therapy to improve auditory processing skills, helping individuals better interpret and understand auditory information.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon"><i className="fas fa-hand-sparkles"></i></div>
                <h4><a href="#service6">Oral Motor Therapy</a></h4>
                <p>Our oral motor therapy focuses on strengthening the muscles used in speech production, improving articulation and clarity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default ServicesSection;
  