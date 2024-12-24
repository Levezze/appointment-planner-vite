import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
  }) => {

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        id="title"
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title..."
        required
      />
      <label>Date</label>
      <input
        min={getTodayString}
        id="date"
        name="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <label>Time</label>
      <input
        id="time"
        name="time"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <ContactPicker 
        contacts={contacts}
        onChange={(e)=> setContact(e.target.value)}
      />
      <button type="submit">Set Appointment</button>
    </form>
  );
};
