import React, { useState, useEffect, useCallback, useMemo } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  useEffect(()=> {
    if (!contacts) return
    const sameName = contacts.some(object => object.name === name);
    setDuplicate(sameName);
  }, [name, contacts]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!duplicate) {
        addContact(name, phone, email);
        setName("");
        setPhone("");
        setEmail("");
      } else {
        alert("Name already exists!")
      }
    }, [name, phone, email, duplicate, addContact]
  );

  const memoizedSetName = useCallback(value => setName(value), []);
  const memoizedSetPhone = useCallback(value => setPhone(value), []);
  const memoizedSetEmail = useCallback(value => setEmail(value), []);
  
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
        name={name} 
        setName={memoizedSetName}
        phone={phone}
        setPhone={memoizedSetPhone}
        email={email}
        setEmail={memoizedSetEmail}
        handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={contacts} />
      </section>
    </div>
  );
};
