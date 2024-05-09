import React, { useState } from "react";

export default function MyForm() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
    errors: {}
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: value,
      errors: { ...formData.errors, [name]: value.trim() === "" }
    });
  };

  function submit(e) {
    e.preventDefault();
    const form = e.target;
    const formDataToSend = new FormData(form);
    fetch(
      "https://script.google.com/macros/s/AKfycbw5FmmzX_of4gKU5E-mzFaAztgv4UBpYCcBYj5phWn9HHtwr6YwwEItL3tzfnL3h7zr/exec",
      { method: "POST", body: formDataToSend }
    ).then(() => {
      console.log("Form submitted successfully");
      setFormData({
        Name: "",
        Email: "",
        Message: "",
        errors: {}
      });
    }).catch(error => {
      console.error("Error submitting form:", error);
    });
  }

  return (
    <div className="App">
      <form className="form" onSubmit={submit}>
        <input hidden type="text" placeholder="Name" defaultValue="Sheet1" name="sheetName" />
        <input type="text" placeholder="Name" name="Name" value={formData.Name} onChange={handleInputChange} />
        {formData.errors.Name && <p className="error-message">Please input your name</p>}
        <input type="email" placeholder="Email" name="Email" value={formData.Email} onChange={handleInputChange} />
        {formData.errors.Email && <p className="error-message">Please input your email</p>}
        <input type="text" placeholder="Message" name="Message" value={formData.Message} onChange={handleInputChange} />
        {formData.errors.Message && <p className="error-message">Please fill in the message box</p>}
        <input type="submit" />
      </form>
    </div>
  );
}
