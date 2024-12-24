import React, { useCallback, useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ contacts, appointments, addAppointment }) => {
  const [title, setTitle] = useState()
  const [contact, setContact] = useState()
  const [date, setDate] = useState()
  const [time, setTime] = useState()

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addAppointment(title, contact, date, time);
      setTitle("");
      setContact("");
      setDate("");
      setTime("");   
    }, [title, contact, date, time, addAppointment]
  );

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList array={appointments} />
      </section>
    </div>
  );
};