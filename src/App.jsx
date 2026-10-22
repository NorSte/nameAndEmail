import { useEffect, useState } from "react";
import "./App.css";
import { initialContacts } from "./data/contacts.js";

function App() {
  const [contacts, setContacts] = useState([...initialContacts]);
  const [selectedContact, setSelectedContact] = useState("0");
  const [selectedName, setSelectedName] = useState(
    contacts[selectedContact].name,
  );
  const [selectedEmail, setSelectedEmail] = useState(
    contacts[selectedContact].email,
  );
  const [prevName, setPrevName] = useState(contacts[selectedContact].name);
  const [prevEmail, setPrevEmail] = useState(contacts[selectedContact].email);

  useEffect(() => {
    setSelectedName(contacts[selectedContact].name);
    setSelectedEmail(contacts[selectedContact].email);
    setPrevName(contacts[selectedContact].name);
    setPrevEmail(contacts[selectedContact].email);
  }, [selectedContact]);

  function handleSelect(e) {
    setSelectedContact(e.target.value);
  }
  function handleSave() {
    const newContacts = contacts.map((c) => {
      if (c.id === selectedContact) {
        return {
          id: selectedContact,
          name: selectedName,
          email: selectedEmail,
        };
      } else {
        return c;
      }
    });

    setContacts(newContacts);
  }
  function handleReset(e) {
    setSelectedName(prevName);
    setSelectedEmail(prevEmail);
  }
  return (
    <div>
      <>
        <button onClick={handleSelect} value={0}>
          {contacts[0].name}
        </button>

        <button onClick={handleSelect} value={1}>
          {contacts[1].name}
        </button>

        <button onClick={handleSelect} value={2}>
          {contacts[2].name}
        </button>
      </>
      <hr />
      <>
        <label>Name: </label>
        <input
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
        ></input>
      </>
      <br />
      <>
        <label>Mail: </label>
        <input
          value={selectedEmail}
          onChange={(e) => setSelectedEmail(e.target.value)}
        ></input>
      </>
      <br />
      <>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleReset}>Reset</button>
      </>
    </div>
  );
}

export default App;
