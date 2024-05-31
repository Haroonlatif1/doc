function FAQSection() {
    return (
        <section id="faq" className="faq section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Frequently Asked Questions</h2>
                    <p>Explore answers to common questions about our speech therapy services in Lahore. Find out how we can help enhance communication skills effectively.</p>
                </div>
                <div className="faq-list">
                    <ul>
                        <li data-aos="fade-up">
                            <i className="bx bx-help-circle icon-help"></i> 
                            <a href="ww" data-bs-toggle="collapse" data-bs-target="#faq-list-1" className="collapsed">
                                What age groups do you provide speech therapy for? 
                                <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i>
                            </a>
                            <div id="faq-list-1" className="collapse" data-bs-parent=".faq-list">
                                <p>We offer tailored speech therapy solutions for all age groups, including toddlers, children, adolescents, and adults.</p>
                            </div>
                        </li>
                        <li data-aos="fade-up">
                            <i className="bx bx-help-circle icon-help"></i> 
                            <a href="ww" data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">
                                How do you customize therapy for different clients? 
                                <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i>
                            </a>
                            <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                                <p>Our therapy plans are customized based on a detailed assessment of each client&apos;s unique needs, strengths, and goals to ensure effective and engaging therapy sessions.</p>
                            </div>
                        </li>
                        <li data-aos="fade-up">
                            <i className="bx bx-help-circle icon-help"></i> 
                            <a href="ww" data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">
                                What qualifications do your therapists hold? 
                                <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i>
                            </a>
                            <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                                <p>All our therapists are certified and have extensive training in speech-language pathology, holding degrees from accredited institutions.</p>
                            </div>
                        </li>
                        <li data-aos="fade-up">
                            <i className="bx bx-help-circle icon-help"></i> 
                            <a href="ww" data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">
                                How long does it typically take to see improvement? 
                                <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i>
                            </a>
                            <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                                <p>Improvement timelines can vary based on the individual&apos;s condition and consistency of therapy, but many clients see noticeable progress within a few months.</p>
                            </div>
                        </li>
                        <li data-aos="fade-up">
                            <i className="bx bx-help-circle icon-help"></i> 
                            <a href="ww" data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">
                                Do you provide support and training for families as well? 
                                <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i>
                            </a>
                            <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                                <p>Yes, we believe that family involvement is crucial for effective therapy, and we provide guidance and training for families to support communication development at home.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
