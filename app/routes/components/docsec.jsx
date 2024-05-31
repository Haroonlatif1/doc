function DoctorsSection() {
    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title">
                    <h2>Our Team</h2>
                    <p>Meet our dedicated team of specialists who bring compassion, expertise, and innovative care to our clinic every day. Each member is committed to providing the best possible outcomes for our patients.</p>
                </div>
                
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/doctors/doctors-1.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Miss Maryam</h4>
                                <span>Senior Occupational Therapist</span>
                                <p>With over 15 years of experience, Miss Maryam excels in developing individualized therapeutic interventions to improve daily functioning and enhance quality of life.</p>
                                <div className="social">
                                    <a href="ww"><i className="ri-twitter-fill"></i></a>
                                    <a href="ww"><i className="ri-facebook-fill"></i></a>
                                    <a href="ww"><i className="ri-instagram-fill"></i></a>
                                    <a href="ww"><i className="ri-linkedin-box-fill"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/doctors/doctors-2.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Miss Nida</h4>
                                <span>Speech-Language Pathologist</span>
                                <p>Boasting over 7 years of expertise, Miss Nida specializes in the diagnosis and treatment of speech, language, and communication issues in children and adults.</p>
                                <div className="social">
                                    <a href="ww"><i className="ri-twitter-fill"></i></a>
                                    <a href="ww"><i className="ri-facebook-fill"></i></a>
                                    <a href="ww"><i className="ri-instagram-fill"></i></a>
                                    <a href="ww"><i className="ri-linkedin-box-fill"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/doctors/doctors-3.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Miss Ayesha</h4>
                                <span>Speech-Language Pathologist</span>
                                <p>Specializes in behaviour disorders, helping children enhance communication skills effectively.</p>
                                <div className="social">
                                    <a href="ww"><i className="ri-twitter-fill"></i></a>
                                    <a href="ww"><i className="ri-facebook-fill"></i></a>
                                    <a href="ww"><i className="ri-instagram-fill"></i></a>
                                    <a href="ww"><i className="ri-linkedin-box-fill"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Additional members can be added here */}
                </div>
            </div>
        </section>
    );
}

export default DoctorsSection;
