import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";

import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personsService
      .getAll()
      .then((initialPersons) => setPersons(initialPersons));
  }, []);

  const filtered = persons.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase()),
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

  const handleDeletion = (id) => {
    personsService.deletePerson(id).then((deleted) => {
      setPersons(persons.filter((p) => p.id !== deleted.id));
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!newName || !newPhone) return alert("fill form first");

    if (checkIfExists(newName)) {
      alert(`${newName} already exists`);
      return;
    }
    const newPerson = { name: newName, phone: newPhone };

    personsService.addPerson(newPerson).then((newPerson) => {
      setPersons((current) => [...current, newPerson]);
      setNewName("");
      setNewPhone("");
    });
  };

  const checkIfExists = (name) => {
    return persons.some((person) => person.name === name);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Form
        handleFormSubmit={handleFormSubmit}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
        newName={newName}
        newPhone={newPhone}
      />
      <h2>Numbers</h2>
      {filter ? (
        <Persons persons={filtered} handleDelete={handleDeletion} />
      ) : (
        <Persons persons={persons} handleDelete={handleDeletion} />
      )}
    </div>
  );
};

export default App;
