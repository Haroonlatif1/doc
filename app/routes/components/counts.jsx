import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCalendarCheck, faUserMd } from '@fortawesome/free-solid-svg-icons';
import '../assets/counts.css'

const CounterUpPage = () => {
  const [counterOn, setCounterOn] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    onChange: (inView) => {
      setCounterOn(inView);
    },
  });

  return (
    <div className="container text-center counter-page">
     
      <div ref={ref} className="row counter-container">
        {counterOn && (
          <>
            <div className="col-md-4">
              <div className="card counter-card">
                <div className="card-body">
                  <FontAwesomeIcon icon={faTrophy} size="2x" className="icon" />
                  <h2>
                    Successful treatments
                    
                  </h2>
                  <p className='counti'>
                    <CountUp start={0} end={80} duration={2} delay={0.2} />%
                    </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card counter-card">
                <div className="card-body">
                  <FontAwesomeIcon icon={faCalendarCheck} size="2x" className="icon" />
                  <h2>
                    Sessions this year
                
                  </h2>
                  <p className='counti'><CountUp start={0} end={1000} duration={2} delay={0} />+</p>
                  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card counter-card">
                <div className="card-body">
                  <FontAwesomeIcon icon={faUserMd} size="2x" className="icon" />
                  <h2>
                    Specialized therapists
                    
                  </h2>
                  <p className='counti'>0
                    <CountUp start={0} end={5} duration={3} delay={0} />
                    </p>
                    
                </div>
              </div>
            </div>
          </>
        )}
      </div>
     
    </div>
  );
};

export default CounterUpPage;
