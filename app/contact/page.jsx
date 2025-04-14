"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_ohnqeob",
        "template_d3bgg4q",
        formData,
        "OvYtwIPxHNSo7SQXY"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setSuccess(true);
        setFormData({
          from_name: "",
          lastName: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email. Error details:", error);
        setSuccess(false);
        alert("Failed to send email. Please try again later.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-gray-600 text-4xl mt-10 mb-10 lg:text-[50px] font-bold text-center">
        Want to <span className="text-accent">Hire Me!</span>
      </h1>
      <div className="flex flex-col lg:flex-row lg:gap-10 lg:mt-10 mb-10">
        <form
          onSubmit={handleSubmit}
          className="lg:w-[50%] bg-gray-700 bg-opacity-[30%] p-10 space-y-6 rounded-3xl"
        >
          <h1 className="font-bold text-3xl">Let's Work Together</h1>

          <input
            type="text"
            name="from_name" // Matches the placeholder in the EmailJS template
            value={formData.from_name}
            onChange={handleChange}
            className="bg-transparent border border-gray-600 rounded-lg px-4 py-2 w-full"
            placeholder="First Name"
          />
          <input
            type="email"
            name="email" // Matches the placeholder in the EmailJS template
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent border border-gray-600 rounded-lg px-4 py-2 w-full"
            placeholder="Email"
          />
          <textarea
            name="message" // Matches the placeholder in the EmailJS template
            value={formData.message}
            onChange={handleChange}
            className="bg-transparent border border-gray-600 rounded-lg px-4 py-2 w-full"
            placeholder="Enter your message"
          />
          <Button
            type="submit"
            className={`bg-accent text-black duration-300 hover:text-accent ${
              sending ? "cursor-wait" : ""
            }`}
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Mail"}
          </Button>
          {success === true && (
            <p className="text-green-500">Message sent successfully!</p>
          )}
          {success === false && (
            <p className="text-red-500">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
        <div className="space-y-6 mt-10 lg:mt-0">
          <div className="flex flex-row gap-3 items-center">
            <FaPhone className="h-16 w-16 p-4 bg-gray-600 bg-opacity-[40%] rounded-xl text-accent" />
            <div>
              <h1 className="text-[20px]">Phone</h1>
              <p>+92 3259871433</p>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <MdEmail className="h-16 w-16 p-4 bg-gray-600 bg-opacity-[40%] rounded-xl text-accent" />
            <div>
              <h1 className="text-[20px]">Email</h1>
              <p>haseebmazhar35@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
