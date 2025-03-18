'use client';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm('service_364ohnh', 'template_e00j55m', formRef.current, {
        publicKey: process.env.VITE_EMAIL_JS,
      })
      .then(
        () => {
          console.log('Success');
        },
        (error) => {
          console.log('Failed', error.text);
        }
      );

    setSent(true);
  };

  if (sent) {
    return (
      <>
        <p className="text-lg font-semibold">Thank you for contacting us.</p>
        <p>We will reply to you soon.</p>
      </>
    );
  } else {
    return (
      <>
        <h2 className="text-2xl font-bold">Club Contact Information</h2>
        <p className="mb-4">Use the form below to contact us. We look forward to hearing from you!</p>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col text-lg">
          <label className="mb-1">Name</label>
          <input type="text" name="name" required className="border border-gray-300 rounded-md p-2 mb-4" />
          
          <label className="mb-1">Email</label>
          <input type="email" name="email" required className="border border-gray-300 rounded-md p-2 mb-4" />
          
          <label className="mb-1">Phone Number</label>
          <input type="tel" name="phone" className="border border-gray-300 rounded-md p-2 mb-4" />
          
          <label className="mb-1">Message</label>
          <textarea rows={5} name="message" required className="border border-gray-300 rounded-md p-2 mb-4 resize-none" />
          
          <button className="cursor-pointer text-white bg-navy hover:bg-orange transition duration-500 rounded-full py-2 px-6 w-full">
            Send Message
          </button>
        </form>
      </>
    );
  }
}