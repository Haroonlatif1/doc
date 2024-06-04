import { useState } from 'react';
import Modal from "./modalpopup";
import { Form, useActionData } from "@remix-run/react";
import { ActionFunction, redirect, json } from "@remix-run/node";
import { prisma } from "~/db.server";

// Define the action function to handle form submission
export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("name")?.toString() ?? '';
  let email = formData.get("email")?.toString() ?? '';
  let phone = formData.get("phone")?.toString() ?? '';
  let date = formData.get("date")?.toString() ?? '';
  let service = formData.get("service")?.toString() ?? '';
  let therapist = formData.get("therapist")?.toString() ?? '';
  let message = formData.get("message")?.toString() ?? '';

  if (!name || !email) {
    return json({ error: "Invalid form submission" }, { status: 400 });
  }

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        phone,
        appointmentDate: new Date(date),
        service,
        therapist,
        message,
      },
    });

    // Assuming you want to redirect to a success page after successful submission
    return redirect("/success");
  } catch (error) {
    return json({ error: "Failed to create user" }, { status: 500 });
  }
};

export default function Index() {
  const actionData = useActionData();
  const [formStatus, setFormStatus] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendMessage = () => {
    setTimeout(() => {
      setIsModalOpen(true);
      setTimeout(() => setIsModalOpen(false), 3000); // Automatically close after 3 seconds
    }, 1000);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    setFormStatus('loading'); // Set loading state

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
        <Form method="post" className="php-email-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 form-group">
              <input type="email" name="email" className="form-control" id="email" placeholder="Your Email" required />
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
          <div className="text-center">
            <button type="submit" onClick={handleSendMessage}>Book Appointment</button>
          </div>
          <input type="hidden" name="access_key" value="71357793-c0e4-4dd2-8553-c8f72d65a8a5" />
        </Form>
      </div>
      <Modal isOpen={isModalOpen} />
    </section>
  );
}
export default 