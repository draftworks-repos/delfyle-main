'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-[1400px] mx-auto flex justify-center items-center min-h-screen gap-8 px-4">
      {/* Form View */}
      {!submitted && (
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Get in touch</h2>
            <button className="text-2xl font-light">&times;</button>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-3 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full p-3 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">State</label>
              <select className="w-full p-3 rounded-md bg-gray-100 focus:outline-none">
                <option>Select your state</option>
                <option>Maharashtra</option>
                <option>Gujarat</option>
                <option>Karnataka</option>
                <option>Delhi</option>
                <option>Tamil Nadu</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">
                Choose Your Required Services
              </label>
              <select className="w-full p-3 rounded-md bg-gray-100 focus:outline-none">
                <option>Select a service</option>
                <option>Legal Advisory</option>
                <option>Compliance Services</option>
                <option>Startup Support</option>
              </select>
            </div>
            <div className="flex justify-between items-center pt-4">
              <button
                type="submit"
                className="text-blue-600 font-semibold tracking-wide flex items-center gap-2"
              >
                SEND
                <span className="text-xl">✉️</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Thank You View */}
      {submitted && (
        <div className="bg-[#2F3DFF] text-white rounded-2xl shadow-xl p-6 w-full max-w-md flex flex-col justify-between min-h-[400px]">
          <div className="flex justify-between items-start">
            <h2 className="text-4xl font-bold leading-tight">Thank<br />You.</h2>
            <button
              className="text-white text-2xl"
              onClick={() => setSubmitted(false)}
            >
              &times;
            </button>
          </div>
          <div className="mt-8 text-sm">
            <p className="mb-2">We’ll be in touch.</p>
            <p>Shortly!</p>
          </div>
          <div className="flex justify-end mt-6">
            <button className="text-white text-sm tracking-wide flex items-center gap-2">
              NEXT <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
