// components/TailwindForm.js
// "use client"
import { useState } from 'react';

export default function ContactForm() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   number: '',
  //   email: '',
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Add logic here to handle the form submission
  //   console.log(formData);
  // };

  return (
    <form action='mailto:carjaipursince1998@gmail.com' method='post'
    // onSubmit={handleSubmit}
     className="max-w-md mx-auto bg-white p-8 mt-10 rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          // value={formData.name}
          // onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">Number:</label>
        <input
          type="tel"
          id="number"
          name="number"
          // value={formData.number}
          // onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          // value={formData.email}
          // onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          required
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}
