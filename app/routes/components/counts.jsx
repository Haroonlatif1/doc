function CountsSection() {
    return (
        <section id="counts" className="counts">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="fas fa-user-md"></i>
                            <span data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1" className="purecounter"></span>
                            <p>Specialized Therapists</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                            <i className="fas fa-smile"></i>
                            <span data-purecounter-start="0" data-purecounter-end="1200" data-purecounter-duration="1" className="purecounter"></span>
                            <p>Successful Treatments</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="fas fa-calendar-alt"></i>
                            <span data-purecounter-start="0" data-purecounter-end="300" data-purecounter-duration="1" className="purecounter"></span>
                            <p>Sessions This Year</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="fas fa-book-reader"></i>
                            <span data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="1" className="purecounter"></span>
                            <p>Educational Workshops</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountsSection;
