import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import "./ShowList.css";
import { Button, Container } from "react-bootstrap";

function ShowsList() {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShows(data.map((entry) => entry.show));
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  function handleBookingSubmit(bookingData) {
    // Store the user's details in local storage
    console.log(bookingData);
    localStorage.setItem("userDetails", JSON.stringify(bookingData));

    // Hide the booking form
    setShowForm(false);
  }
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  console.log(userDetails);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <h2>List of TV Shows</h2>
      {shows.map((show) => (
        <div key={show.id}>
          <h2>Book {show.name}</h2>
          <img src={show.image?.medium} alt={show.name} />
          <div className="center">
            <p className="show-genre">Genre: {show.genres.join(", ")}</p>
            <p className="show-year">Release year : {show.premiered}</p>
            <p className="show-runtime">Runtime: {show.runtime} minutes</p>
            <div className="center1">
              <Button
                className="button-container"
                onClick={() => setShowForm(true)}
              >
                Book Now
              </Button>
            </div>
          </div>
          {showForm && (
            <BookingForm show={show} onBookingSubmit={handleBookingSubmit} />
          )}
        </div>
      ))}
    </Container>
  );
}

export default ShowsList;
