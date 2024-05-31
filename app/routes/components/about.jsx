import { Link } from 'react-router-dom';

function AboutSection() {
    return (
        <section id="about" className="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                        <img src="/pic1.jpg" alt='not found' className=" mb-4 ml-2 "height={'300px'} />
                    </div>
                    <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                        <h3>Excellence in Speech Therapy, Occupational and behaviour Health</h3>
                        <p>
                            At our state-of-the-art clinic in Lahore, we are dedicated to enhancing communication and daily living skills through targeted speech therapy and comprehensive occupational therapy and effective behaviour therapy. Our approach is tailored to foster significant improvements in the lives of individuals with communication and functional skills challenges.
                        </p>
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-fingerprint"></i></div>
                            <h4 className="title"><Link to="/personalized-plans">Customized Treatment Strategies</Link></h4>
                            <p className="description">
                                We develop bespoke therapy plans based on thorough assessments, focusing on the unique requirements of each client. Our treatments are grounded in scientifically proven methods to maximize effectiveness and accelerate progress.
                            </p>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-gift"></i></div>
                            <h4 className="title"><Link to="/innovative-tools">Advanced Therapeutic Tools</Link></h4>
                            <p className="description">
                                Leveraging cutting-edge technology and creative resources, we create engaging and stimulating therapy sessions. These innovative practices help clients achieve their goals in a supportive and dynamic environment.
                            </p>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-atom"></i></div>
                            <h4 className="title"><Link to="/holistic-approach">Integrated Therapy Approach</Link></h4>
                            <p className="description">
                                Our holistic model integrates speech therapy with occupational therapy and behaviour therapy, ensuring a comprehensive treatment spectrum. This collaboration enhances overall functionality and promotes a better quality of life.
                            </p>
                        </div>
                        <div className="social-links">
                            <Link to="//twitter.com/yourclinicname"><i className="bx bxl-twitter"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
