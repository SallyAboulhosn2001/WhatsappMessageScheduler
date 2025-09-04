import { useState } from "react";

export default function WhatsAppScheduler() {
  const [formData, setFormData] = useState({
    number: "",
    message: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //this prevents page refresh when the form is submitted by the user

    // This is the n8n workflow URL
    const webhookUrl = "http://localhost:5678/webhook-test/88832ba8-d8df-475c-9bcc-25c2d628617f";

    const response = await fetch(webhookUrl, { //fetch is used to send data to the url(server) and waits (gets) response
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("✅ Message scheduled successfully!");
      setFormData({ number: "", message: "", time: "" });
    } else {
      alert("❌ Error scheduling message.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold text-center text-gray-800">
          📅 WhatsApp Scheduler
        </h2>

        {/* Recipient phone number */}
        <input
          type="text"
          name="number"
          placeholder="Recipient Number (with country code)"
          value={formData.number}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-2"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-2"
        ></textarea>

        {/* Date & Time */}
        <input
          type="datetime-local"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-2"
        />

        <button
          type="submit" //html there's a rule that if we place a button inside a form it will submit that form when clicked
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Schedule Message
        </button>
      </form>
    </div>
  );
}
