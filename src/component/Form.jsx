// components/CarForm.js

import { useState } from 'react';
import { initializeApp } from 'firebase/app';
// import {initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs , doc, setDoc } from "firebase/firestore";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number:"",
    owner:"",
    color:"",
    registration:"",
    insurance:"",
    carnumber:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target.reset();  
    const database = getFirestore();
    const collectionRef = collection(database, "sell data");
    const docRef = doc(collectionRef);
    setDoc(docRef, {
        name: formData.name,
        email: formData.email,
        number:formData.number,
        owner:formData.owner,
        color:formData.color,
        registration:formData.registration,
        insurance:formData.insurance,
        carnumber:formData.carnumber
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
      <div className="mb-2">
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

      <div className="mb-2">
        <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2 ">Number:</label>
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

      <div className="mb-2">
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

      <div className="mb-2">
        <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50" 
          required
        />
      </div>

      <div className="mb-2">
        <label htmlFor="owner" className="block text-gray-700 text-sm font-bold mb-2">Owner:</label>
        <input
          type="text"
          id="owner"
          name="owner"
          value={formData.owner}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          required
        />
      </div>

      <div className="mb-2">
        <label htmlFor="color" className="block text-gray-700 text-sm font-bold mb-2">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          required
        />
      </div>

      <div className="mb-2">
        <label htmlFor="registration" className="block text-gray-700 text-sm font-bold mb-2">Registration:</label>
        <input
          type="text"
          id="registration"
          name="registration"
          value={formData.registration}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          required
        />
      </div>

      <div className="mb-2">
        <label htmlFor="isAccidental" className="flex items-center">
          <input
            type="checkbox"
            id="isAccidental"
            name="isAccidental"
            checked={formData.isAccidental}
            onChange={handleChange}
            className="mr-2"
          />
          Is Accidental
        </label>
      </div>

      <div className="mb-2">
        <label htmlFor="insurance" className="block text-gray-700 text-sm font-bold mb-2">Insurance:</label>
        <input
          type="text"
          id="insurance"
          name="insurance"
          value={formData.insurance}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          required
        />
      </div>

      <div className="mb-2">
        <label htmlFor="carNumber" className="block text-gray-700 text-sm font-bold mb-2">Car Number:</label>
        <input
          type="text"
          id="carNumber"
          name="carNumber"
          value={formData.carNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          required
        />
      </div><div className="mb-2">
        <label htmlFor="rcImage" className="block text-gray-700 text-sm font-bold mb-2">RC Image:</label>
        <input
          type="file"
          id="rcImage"
          name="rcImage"
          // onChange={handleFileChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          accept="image/*" // Restrict to image files
        />
      </div>

      <div className="mb-2">
        <label htmlFor="insuranceImage" className="block text-gray-700 text-sm font-bold mb-2">Insurance Image:</label>
        <input
          type="file"
          id="insuranceImage"
          name="insuranceImage"
          // onChange={handleFileChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          accept="image/*" // Restrict to image files
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}
