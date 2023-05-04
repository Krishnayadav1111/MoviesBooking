import React from "react";
import { withRouter } from "react-router-dom";

function BookingSummary({ location }) {
  const bookingData = location.state.bookingData;

  return (
    <div>
      <h2>Booking Summary</h2>
      <p>Name: {bookingData.name}</p>
      <p>Email: {bookingData.email}</p>
    </div>
  );
}

export default withRouter(BookingSummary);
