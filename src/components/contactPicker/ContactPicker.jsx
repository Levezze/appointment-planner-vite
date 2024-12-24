import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <>
      <select onChange={onChange} required>
        <option defaultValue>No Contact Selected</option>
        {contacts.map(each => <option>{each.name}</option>)}
      </select>
    </>
  );
};
