import React from "react";

function Namelist() {
  const people = [
    { id: 1, name: "Avani", age: 23, skill: "React" },
    { id: 2, name: "Arun", age: 25, skill: "Angular" },
    { id: 3, name: "Tarun", age: 22, skill: "Vue" },
  ];

  return (
    <section>
      <h1>Team members</h1>
      <ul className="person-list">
        {people.map((person) => (
          <li key={person.id}>
            I am {person.name}. I am {person.age} years old, and I have skill in{" "}
            {person.skill}.
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Namelist;
