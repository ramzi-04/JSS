function Person(nom, age, email) {
  this.nom = nom;
  this.age = age;
  this.email = email;
}

function filterPeopleOver30(peopleArray) {
  var peopleOver30 = peopleArray.filter(function (person) {
    return person.age > 30;
  });

  return peopleOver30;
}

console.log(result);
