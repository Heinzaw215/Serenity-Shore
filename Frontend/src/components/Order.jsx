import '../css/Order.css'

const Order = () => {
  const SubmitForm = () => {
    console.log("Form Submitted.");
  };
  return (
    <section id="booking-form">
      <form id="add-form">
        <fieldset>
          <legend>Add Booking</legend>

          <label htmlFor="room">Room Number:</label>
          <br />

          <label htmlFor="checkIn">Check-in Date:</label>
          <input type="date" id="checkIn" required />
          <br />
          <label htmlFor="checkOut">Check-out Date:</label>
          <input type="date" id="checkOut" required />
          <br />
          <button type="submit" onClick={SubmitForm}>
            Add Booking
          </button>
          <button type="reset">Reset Booking</button>
        </fieldset>
      </form>
    </section>
  );
};

export default Order;
