const Persons = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.map((p) => (
        <div key={p.id}>
          <p>
            {p.name}: {p.phone}
          </p>
          <button onClick={() => handleDelete(p.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};
export default Persons;
