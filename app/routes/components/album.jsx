function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-1.jpg" className="galelry-lightbox">
                <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          {/* Repeat the above structure for other gallery items */}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
