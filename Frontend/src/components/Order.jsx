const Order = () => {
  const SubmitForm = () => {
    console.log("Form Submitted.")
  }
  return (
    <section id="booking-form">
      <h2>Add Booking</h2>
      <form id="add-form">
        <label htmlFor="room">Room Number:</label>
        <input type="number" id="room" placeholder="Enter the number" required />
        <br />
        <br />

        <label htmlFor="checkIn">Check-in Date:</label>
        <input type="date" id="checkIn" required />
        <br />
        <br />

        <label htmlFor="checkOut">Check-out Date:</label>
        <input type="date" id="checkOut" required />
        <br />
        <br />

        <button type="submit" onClick={SubmitForm}>Add Booking</button>
      </form>
    </section>
  );
}

export default Order;