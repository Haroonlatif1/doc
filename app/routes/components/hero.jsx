import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <h1>Welcome to Lahore Speech Therapy Clinic</h1>
        <h2>We specialize in transforming lives through effective communication</h2>
        <Link to="#departments" className="btn-get-started scrollto">Learn More</Link>
      </div>
    </section>
  );
}

export default HeroSection;
