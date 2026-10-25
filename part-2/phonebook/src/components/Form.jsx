const Form = ({
  handleFormSubmit,
  newName,
  newPhone,
  handleNameChange,
  handlePhoneChange,
}) => {
  return (
    <div>
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
    </div>
  );
};
export default Form;
