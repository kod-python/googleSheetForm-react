import React from "react";
import "./style.css";

export default function MyForm() {

  function submit(e) {
    // const formEle = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch(
      "https://script.google.com/macros/s/AKfycbw5FmmzX_of4gKU5E-mzFaAztgv4UBpYCcBYj5phWn9HHtwr6YwwEItL3tzfnL3h7zr/exec",
      { method: "POST", body: formData }
    );
    console.log("submitted");
  }

  return (
    <div className="App">
      <form className="form" onSubmit={submit}>
      <input hidden type="text" placeholder="Name" defaultValue="Sheet1" name="sheetName" />
        <input type="text" placeholder="Name" name="Name" />
        <input type="email" placeholder="Email" name="Email" />
        <input type="text" placeholder="Message" name="Message" />
        <input type="submit" />
      </form>
    </div>
  );
}
