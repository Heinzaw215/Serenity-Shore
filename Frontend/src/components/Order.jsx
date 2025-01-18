import "../css/Order.css";

const Order = () => {
  const SubmitForm = () => {
    console.log("Form Submitted.");
  };
  return (
    <section id="booking-form">
      <form id="add-form">
        <label htmlFor="room">Select room:</label>
        <select name="" id="room">
          <option value="">Single Bed Room</option>
          <option value="">Multi Bed Room</option>
          <option value="">Family Room</option>
        </select>

        <label htmlFor="checkIn">Check-in Date:</label>
        <input type="date" id="checkIn" required />
        <br />
        <label htmlFor="checkOut">Check-out Date:</label>
        <input type="date" id="checkOut" required />
        <br />
        <span>
          <button type="submit" onClick={SubmitForm}>
            Add Booking
          </button>
          <button type="reset">Reset Booking</button>
        </span>
      </form>
    </section>
  );
};

export default Order;
