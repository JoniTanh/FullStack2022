import PhoneNumber from "./PhoneNumber";

const Persons = ({ persons, filter, toggleDelete }) => {
  const filterNames = (person) =>
    person?.name.toLowerCase().includes(filter.toLowerCase());

  return (
    <div>
      {persons.filter(filterNames).map((person) => (
        <PhoneNumber
          key={person.id}
          person={person}
          toggleDelete={toggleDelete}
        />
      ))}
    </div>
  );
};

export default Persons;
