import { json } from "@remix-run/node";
import { Form, useFetcher } from "@remix-run/react";
import { sendEmail } from "../utils/email";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const { senderEmail, ...appointmentData } = data;

  try {
    await sendEmail({
      to: "haroonx2coc@gmail.com",
      from: senderEmail,
      subject: "New Appointment Request",
      body: JSON.stringify(appointmentData, null, 2),
    });
    return json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email: ", error);
    return json({ error: "Failed to send email" }, { status: 500 });
  }
};

export default function Index() {
  const fetcher = useFetcher();

  return (
    <div>
      <fetcher.Form method="post">
        <label>
          Sender Email:
          <input type="email" name="senderEmail" required />
        </label>
        <label>
          Appointment Date:
          <input type="date" name="appointmentDate" required />
        </label>
        <label>
          Appointment Time:
          <input type="time" name="appointmentTime" required />
        </label>
        <button type="submit">Book an Appointment</button>
      </fetcher.Form>
      {fetcher.data && <p>{fetcher.data.message}</p>}
      {fetcher.data?.error && <p style={{ color: "red" }}>{fetcher.data.error}</p>}
    </div>
  );
}
