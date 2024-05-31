import { useState } from 'react';

function AppointmentForm() {
  const [formStatus, setFormStatus] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
  
    const formData = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      date: event.target.date.value,
      service: event.target.service.value,
      therapist: event.target.therapist.value,
      message: event.target.message.value
    };
  
    setFormStatus('loading'); // Set loading state
  
    try {
      const response = await fetch('/api/submit-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        setFormStatus('success');
      } else {
        throw new Error('Failed to submit appointment');
      }
    } catch (error) {
      console.error('Error submitting appointment:', error);
      setFormStatus('error');
    }
  }

  return (
    <section id="appointment" className="appointment section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Schedule Your Appointment</h2>
          <p>Book your appointment with our experts in speech and occupational therapy. We provide personalized consultation to address your specific needs and concerns. Start your journey to better communication and daily functioning today!</p>
        </div>
        <form className="php-email-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 form-group">
              <input type="email" name="name" className="form-control" id="name" placeholder="Your Email" required />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 form-group">
              <input type="text" name="phone" className="form-control" id="phone" placeholder="Your Phone" />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="date" name="date" className="form-control" id="date" placeholder="Appointment Date" required />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 form-group">
              <select name="service" className="form-control" id="service" required>
                <option value="">Select Service Required</option>
                <option value="Speech Therapy">Speech Therapy</option>
                <option value="Occupational Therapy">Occupational Therapy</option>
                <option value="Consultation">Consultation</option>
                <option value="Assessment">Assessment</option>
              </select>
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="text" name="therapist" className="form-control" id="therapist" placeholder="Preferred Therapist" />
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Additional Information (Optional)"></textarea>
          </div>
          <div className="mb-3">
            {formStatus === 'loading' && <div className="loading">Loading</div>}
            {formStatus === 'error' && <div className="error-message">Error sending email. Please try again later.</div>}
            {formStatus === 'success' && <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>}
          </div>
          <div className="text-center"><button type="submit">Book Appointment</button></div>
        </form>
      </div>
    </section>
  );
}

export default AppointmentForm;
