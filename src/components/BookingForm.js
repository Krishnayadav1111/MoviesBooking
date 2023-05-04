import React from "react";
import { useState } from "react";
import "./BookingForm.css";

function BookingForm({ show, onBookingSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = { name, email, phone };
    console.log(bookingData);
    onBookingSubmit(bookingData, show);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book {show.name}</h2>
      <img src={show.image?.medium} alt={show.name} />
      <p>Genre: {show.genres}</p>

      <p>Release year : {show.premiered}</p>
      <p>Runtime: {show.runtime}</p>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
