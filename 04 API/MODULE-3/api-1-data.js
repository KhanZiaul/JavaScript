const persons = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John" + " " + "Doe"]
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun" + " " + "Kabir"]
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ]
};



persons.result.map((person) => {

  const parentDiv = document.getElementById('person');

  const childDiv = document.createElement('div');

  childDiv.classList.add('mb-5')

  childDiv.innerHTML =
  `
  <p>Person Name : ${person.name.fullName}</p>

  <p> Age : ${person.age}</p>

  <p> Street : ${person.address.street}</p>
  `;

  parentDiv.appendChild(childDiv);
  
});