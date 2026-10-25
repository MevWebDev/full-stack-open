const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map((p) => (
        <p key={p.name}>
          {p.name}: {p.phone}
        </p>
      ))}
    </div>
  );
};
export default Persons;
