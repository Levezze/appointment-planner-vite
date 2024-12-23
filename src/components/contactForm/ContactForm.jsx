import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  function handlePhoneChange(e) {
    const input = e.target.value;
    if (/^[0-9()\s.-]*$/.test(input)) {
      setPhone(input);
    } else {
      alert("Only numbers are valid characters for a phone number.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          id="name" 
          name="name" 
          type="text" 
          value={name} 
          onChange={(e)=> setName(e.target.value)} 
          placeholder="Enter name..." 
          required 
        />

        <label>Phone Number</label>
        <input 
          id="phone" 
          name="phone" 
          type="tel" 
          value={phone} 
          onChange={handlePhoneChange}
          // pattern="^(\(\d{3}\)|\d{3})[.\s-]?\d{3}[.\s-]?\d{4}$"
          placeholder="(123) 456 789" 
          required 
        />

        <label>E-mail</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          value={email} 
          onChange={(e)=> setEmail(e.target.value)} 
          placeholder="Enter E-mail..." 
          required 
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

