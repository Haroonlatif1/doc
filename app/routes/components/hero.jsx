import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        {/* Main heading */}
        <h1>Welcome to Lahore Speech Therapy Clinic</h1>
        
        {/* Subheading */}
        <h2>We specialize in transforming lives through effective communication</h2>
        
        {/* Call-to-action button */}
        <Link to="/#about" className="btn-get-started scrollto">Learn More</Link>
      </div>
    </section>
  );
}

export default HeroSection;
