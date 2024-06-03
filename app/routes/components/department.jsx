import { useState } from "react";
import "../assets/department.css"
function DepartmentsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const departmentData = [
    {
      title: "Speech Therapy for Children",
      description:
        "Focused on improving communication skills, including speech, language, and pronunciation challenges in children. Our child-centric methods are designed to engage young patients in a supportive, fun environment, enabling effective learning and improvement through various interactive activities.",
      imageSrc: "./pic1.jpg",
    },
    {
      title: "Adult Speech Therapy",
      description:
        "Our speech therapy program for adults focuses on enhancing communication skills, addressing speech, language, and cognitive challenges. We provide personalized interventions to improve overall quality of life.",
      imageSrc: "assets/img/departments-2.jpg",
    },
    {
      title: "Learning Disabilities",
      description:
        "Our learning disabilities program supports individuals with learning challenges, providing strategies and accommodations to enhance academic and personal success.",
      imageSrc: "assets/img/departments-3.jpg",
    },
    {
      title: "Occupational Therapy",
      description:
        "Our occupational therapy program helps individuals develop, recover, or maintain daily living and work skills. We provide personalized interventions to enhance physical, cognitive, and emotional well-being.",
      imageSrc: "assets/img/departments-4.jpg",
    },
    {
      title: "Autism Spectrum Disorders",
      description:
        "Our autism spectrum disorders program provides comprehensive support for individuals with autism, offering behavioral, speech, and occupational therapy services to enhance communication, social interaction, and daily living skills.",
      imageSrc: "assets/img/departments-5.jpg",
    },
    {
      title: "Physical Therapy",
      description:
        "Our physical therapy program helps individuals recover from injuries, manage chronic conditions, and improve overall physical function. We provide personalized interventions to enhance mobility, strength, and flexibility.",
      imageSrc: "assets/img/departments-6.jpg",
    },
    {
      title: "Psychology and Counseling",
      description:
        "Our psychology and counseling program offers individual, group, and family therapy services to support mental health and well-being. We provide evidence-based interventions to address a range of mental health concerns.",
      imageSrc: "assets/img/departments-7.jpg",
    },
  ];

  return (
    <section id="departments" className="departments">
      <div className="container">
        <div className="section-title">
          <h2>Our Specialties</h2>
          <p>
            Explore our dedicated departments designed to provide specialized care in speech and occupational therapy. Each department is staffed by experienced professionals committed to your health and well-being.
          </p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              {departmentData.map((department, index) => (
                <li className="nav-item" key={index}>
                  <button
                    className={`btclass ${index === activeTab ? "active" : ""}`}
                    onClick={() => handleTabClick(index)}
                  >
                    {department.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="tab-content">
              {departmentData.map((department, index) => (
                <div
                  className={`tab-pane ${index === activeTab ? "active show" : ""
                    }`}
                  key={index}
                >
                  <div className="row gy-4">
                  <div className=" col-lg-8 details order-2 order-lg-1">
  <h3>{department.title}</h3>
  <p className="fst-italic">{department.description}</p>
</div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={department.imageSrc}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DepartmentsSection;