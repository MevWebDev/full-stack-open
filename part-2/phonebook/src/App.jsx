import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (checkIfExists(newName)) {
      alert(`${newName} already exists`);
      return;
    }
    const newPerson = { name: newName };
    setPersons([...persons, newPerson]);
    setNewName("");
  };

  const checkIfExists = (name) => {
    return persons.some((person) => person.name === name);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((p) => (
        <p key={p.name}>{p.name}</p>
      ))}
    </div>
  );
};

export default App;
