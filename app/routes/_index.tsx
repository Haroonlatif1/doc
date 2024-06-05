import './assets/style.css'; // Ensure this path is correct
import About from "./components/about"
import Album from "./components/album"
import Department from "./components/department"
import Appoint from "./components/Appoint"
import Counts from "./components/counts"
import Docsec from "./components/docsec"
import Faq from "./components/faq"
import Hero from "./components/hero"
import Services from "./components/services"
import Testno from "./components/testno"
import Navbar from "./components/navbar"
import Whyus from "./components/why_us"
import Footer from "./components/footer" 
// Corrected function to return proper objects for <link> tags

export const links = () => {
  return [
    {
      rel: "icon",
      href: "/ak.png" // Verify this path is accessible
    },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    }
  ];
};

export default function Index() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Whyus/>
      <About/>
      <Services/>
      <Docsec/>
      <Album/>
      <Appoint/>
      <Counts/>
      <Department/>
      <Faq/>
      <Testno/>
      <Footer/>
      
    </div>
  );
}