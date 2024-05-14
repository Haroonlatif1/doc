import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <h1>Welcome to Medilab</h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>
        <Link to="/#about" className="btn-get-started scrollto">Get Started</Link>
      </div>
    </section>
  );
}

export default HeroSection;
