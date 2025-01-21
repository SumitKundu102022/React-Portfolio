import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  // Update the state of the form data as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
    };
    
    

  // Handle form submission
  const handleSubmit = (e) => {
      e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Remove errors after 5 seconds
      setTimeout(() => {
        setErrors({});
      }, 5000); 
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
          EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
          formData,
          EMAILJS_USER_ID // Replace with your EmailJS user ID
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!");
          setFormData({ name: "", subject: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send message. Please try again!");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-4" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        {/* Connect with Me / */}
        Hire Me
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="mb-8 w-full appearance-none rounded-lg border border-purple-900 bg-transparent px-3 py-2 text-sm focus:border-purple-400 focus:outline-none"
          />
          {errors.name && (
            <p className="text-sm text-pink-400">{errors.name}</p>
          )}
        </div>

        {/* Subject Input */}
        <div className="mb-4">
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="mb-8 w-full appearance-none rounded-lg border border-purple-900 bg-transparent px-3 py-2 text-sm focus:border-purple-400 focus:outline-none"
          />
          {errors.subject && (
            <p className="text-sm text-pink-400">{errors.subject}</p>
          )}
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mb-8 w-full appearance-none rounded-lg border border-purple-900 bg-transparent px-3 py-2 text-sm focus:border-purple-400 focus:outline-none"
          />
          {errors.email && (
            <p className="text-sm text-pink-400">{errors.email}</p>
          )}
        </div>

        {/* Message Input */}
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="mb-8 w-full appearance-none rounded-lg border border-purple-900 bg-transparent px-3 py-2 text-sm focus:border-purple-400 focus:outline-none"
            rows="4"
          />
          {errors.message && (
            <p className="text-sm text-pink-400">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`mb-8 w-full rounded  px-4 py-2 text-sm bg-purple-700 font-semibold text-white hover:bg-purple-800 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
