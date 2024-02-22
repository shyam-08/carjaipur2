// components/TailwindForm.js
// "use client"
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
// import {initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs , doc, setDoc } from "firebase/firestore";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();  
    const database = getFirestore();
    const collectionRef = collection(database, "contact data");
    const docRef = doc(collectionRef);
    setDoc(docRef, {
        name: formData.name,
        email: formData.email,
        number:formData.number
      }).then(() => {
        alert("Sent Successfully")
        // console.log("Document successfully written!");
      }).catch((error) => {
        console.error("Error writing document: ", error);
        alert("Error, Please check")
      });
         
    };

  return (
    <form 
    onSubmit={handleSubmit}
     className="max-w-md mx-auto bg-white p-8 mt-10 rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
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
          value={formData.number}
          onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
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
