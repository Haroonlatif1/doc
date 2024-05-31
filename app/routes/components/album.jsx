function Gallery() {
    return (
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-title">
            <h2>Our Gallery</h2>
            <p>Explore our gallery to see the transformative experiences at our clinic. Each image captures the essence of our innovative speech and occupational therapy sessions, highlighting our commitment to improving communication and daily living skills.</p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row g-0">
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-1.jpg" className="gallery-lightbox">
                  <img src="assets/img/gallery/gallery-1.jpg" alt="Therapy Session" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-2.jpg" className="gallery-lightbox">
                  <img src="assets/img/gallery/gallery-2.jpg" alt="Engaging Tools" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-3.jpg" className="gallery-lightbox">
                  <img src="assets/img/gallery/gallery-3.jpg" alt="Patient Care" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-4.jpg" className="gallery-lightbox">
                  <img src="assets/img/gallery/gallery-4.jpg" alt="Advanced Technology" className="img-fluid" />
                </a>
              </div>
            </div>
            {/* Continue adding more images similarly */}
          </div>
        </div>
      </section>
    );
  }
  
  export default Gallery;
  