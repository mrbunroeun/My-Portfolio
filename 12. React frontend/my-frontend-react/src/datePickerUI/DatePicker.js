import React from "react";
import "./DatePicker.css";

function DatePicker() {
  return (
    <>
      <div className="place_holder_wrapper">
        <input className="place_holder one" type="text" placeholder="dd" />
        <p>/</p>
        <input className="place_holder two" type="text" placeholder="mm" />
        <p>/</p>
        <input className="place_holder" type="text" placeholder="yyyy" />
        <p className="the_calender">
          <i class="fa-solid fa-calendar-days" />
        </p>
      </div>
    </>
  );
}

export default DatePicker;
