import axios from "axios";

const getAll = () => {
  return axios
    .get("http://localhost:3001/persons")
    .then((response) => response.data);
};

const addPerson = (newPerson) => {
  return axios
    .post("http://localhost:3001/persons", newPerson)
    .then((response) => response.data);
};

const deletePerson = (id) => {
  return axios
    .delete(`http://localhost:3001/persons/${id}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

const updatePerson = (id, updatedPerson) => {
  return axios
    .put(`http://localhost:3001/persons/${id}`, updatedPerson)
    .then((res) => res.data);
};
export default { getAll, addPerson, deletePerson, updatePerson };
