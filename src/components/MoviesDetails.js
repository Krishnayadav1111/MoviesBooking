import { useState } from "react";
import BookingForm from "./BookingForm";

function MovieDetails({ movie }) {
  const [showForm, setShowForm] = useState(false);

  const handleBookingSubmit = (bookingData) => {
    // Handle booking submission and storage here
    // ...
    setShowForm(false);
  };

  return (
    <div>
      <h2>{movie.name}</h2>
      <img src={movie.image} alt={movie.name} />
      <p>{movie.summary}</p>
      <button onClick={() => setShowForm(true)}>Book Now</button>
      {showForm && (
        <BookingForm
          selectedMovie={movie}
          onBookingSubmit={handleBookingSubmit}
        />
      )}
    </div>
  );
}

export default MovieDetails;
