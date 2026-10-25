import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  const filtered = persons.filter(
    (p) => p.name.toLowerCase() === filter.toLowerCase(),
  );

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!newName || !newPhone) return alert("fill form first");

    if (checkIfExists(newName)) {
      alert(`${newName} already exists`);
      return;
    }
    const newPerson = { name: newName, phone: newPhone };
    setPersons([...persons, newPerson]);
    setNewName("");
    setNewPhone("");
  };

  const checkIfExists = (name) => {
    return persons.some((person) => person.name === name);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with</p>
      <input value={filter} onChange={handleFilterChange} />
      <h2>Add new</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          phone: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filter
        ? filtered.map((p) => (
            <p key={p.name}>
              {p.name}: {p.phone}
            </p>
          ))
        : persons.map((p) => (
            <p key={p.name}>
              {p.name}: {p.phone}
            </p>
          ))}

      <h3>Filtered</h3>
      {}
    </div>
  );
};

export default App;
