function DepartmentsSection() {
    return (
        <section id="departments" className="departments">
            <div className="container">
                <div className="section-title">
                    <h2>Our Specialties</h2>
                    <p>Explore our dedicated departments designed to provide specialized care in speech and occupational therapy. Each department is staffed by experienced professionals committed to your health and well-being.</p>
                </div>
                <div className="row gy-4">
                    <div className="col-lg-3">
                        <ul className="nav nav-tabs flex-column">
                            <li className="nav-item">
                                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Speech Therapy for Children</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Adult Speech Therapy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Learning Disabilities</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Occupational Therapy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Autism Spectrum Disorders</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <div className="tab-content">
                            <div className="tab-pane active show" id="tab-1">
                                <div className="row gy-4">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Speech Therapy for Children</h3>
                                        <p className="fst-italic">Focused on improving communication skills, including speech, language, and pronunciation challenges in children.</p>
                                        <p>Our child-centric methods are designed to engage young patients in a supportive, fun environment, enabling effective learning and improvement through various interactive activities.</p>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <img src="assets/img/departments-1.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            {/* Remaining tab panes */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DepartmentsSection;
