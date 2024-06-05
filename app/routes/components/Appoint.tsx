import React, { useState } from 'react';
import { Form, useActionData } from "@remix-run/react";
import { ActionFunction, json, redirect } from "@remix-run/node";
import { prisma } from "~/db.server";
import Modal from "./modalpopup";

interface ActionData {
  error?: string;
}

interface FormData {
  name: string;
  email: string;
  phone?: string;
  date: string;
  service: string;
  therapist?: string;
  message?: string;
}

// Define the action function to handle form submission
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString() ?? '';
  const email = formData.get("email")?.toString() ?? '';
  const phone = formData.get("phone")?.toString();
  const date = formData.get("date")?.toString() ?? '';
  const service = formData.get("service")?.toString() ?? '';
  const therapist = formData.get("therapist")?.toString();
  const message = formData.get("message")?.toString();

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
    return redirect("/success");
  } catch (error) {
    return json({ error: "Failed to create user" }, { status: 500 });
  }
};

export default function Index() {
  const actionData = useActionData<ActionData>();
  const [formStatus, setFormStatus] = useState<'loading' | 'error' | 'success' | ''>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendMessage = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsModalOpen(false), 3000); // Automatically close after 3 seconds
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus('loading'); // Set loading state
    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
    });

    if (response.ok) {
      setFormStatus('success');
      handleSendMessage();
    } else {
      setFormStatus('error');
    }
  }

  return (
    <section id="appointment" className="appointment section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Schedule Your Appointment</h2>
          <p>Book your appointment with our experts in speech and occupational therapy.</p>
        </div>
        <Form method="post" onSubmit={handleSubmit}>
          <div className="row">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="phone" placeholder="Your Phone" />
            <input type="date" name="date" required />
            <select name="service" required>
              <option value="">Select Service Required</option>
              <option value="Speech Therapy">Speech Therapy</option>
              <option value="Occupational Therapy">Occupational Therapy</option>
            </select>
            <input type="text" name="therapist" placeholder="Preferred Therapist" />
            <textarea name="message" rows={5} placeholder="Additional Information (Optional)"></textarea>
          </div>
          <div className="text-center">
            <button type="submit">Book Appointment</button>
          </div>
          {formStatus === 'loading' && <p>Loading...</p>}
          {formStatus === 'error' && <p>Error sending request. Please try again.</p>}
          {formStatus === 'success' && <p>Your appointment request has been sent successfully. Thank you!</p>}
        </Form>
        <Modal isOpen={isModalOpen} />
      </div>
    </section>
  );
}
