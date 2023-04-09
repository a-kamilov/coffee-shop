import React from "react";

const Reservation = () => {
  return (
    <>
      <div className="reservation">
        <div className="booking box">
          <h1>Booking a table</h1>
          <form>
            <input type="text" placeholder="How many people ?" />
            <input type="date" name="" id="" />
            <input type="time" name="" id="" />
            <button className="default_btn">BOOK S TABLE</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reservation;
