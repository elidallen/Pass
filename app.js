function moveLocation(person, location) {
    person.location.city = location.city;
    person.location.state = location.state;
    person.location.zip = location.zip;
  }
  
  const nLoc = {
    city: 'Rochester',
    state: 'New York',
    zip: 14604
  };
  
  moveLocation(personTwo, nLoc);
  
  nLoc.city = 'Buffalo';
  nLoc.zip = 14201;
  
  console.log(personTwo.location.city); // This should now be 'Rochester'.

  personTwo.location = personOne.location;

const nLoc = {
  city: 'Mountain View',
  state: 'California',
  zip: 94035
};

moveLocation(personOne, nLoc);

console.log(personOne.location.state); // Both should now live in 'California'.
console.log(personTwo.location.state); // Both should now live in 'California'.

const personThree = {
    name: {
      first: 'Alice', // You can set this to whatever you like.
      last: `${personOne.name.last}-${personTwo.name.last}`
    },
    age: 0,
    location: personOne.location, // Set the location by reference.
  };
  
  console.log(personThree.name.last); // This should be a hyphenated combination of personOne and personTwo's last names.

  personOne.age += 20;
personTwo.age += 20;
personThree.age += 20;

const personThreeLocationCopy = {
    city: personThree.location.city,
    state: personThree.location.state,
    zip: personThree.location.zip,
  };
  
  // Now, set personThree's location to the copy.
  personThree.location = personThreeLocationCopy;

  personOne.age += 300;
personTwo.age += 300;
personThree.age += 300;

function clonePerson(person) {
    const personCopy = JSON.parse(JSON.stringify(person));
    personCopy.age = 0;
    return personCopy;
  }
  
  const personFour = clonePerson(personOne);
  const personFive = clonePerson(personTwo);
  const personSix = clonePerson(personThree);
  
  // Test moving personFour to a new location.
  moveLocation(personFour, { city: 'Seattle', state: 'Washington', zip: 98101 });
  
  console.log(personOne.location.city); // Person One's location should remain unchanged.
  console.log(personFour.location.city); // Person Four's location should now be 'Seattle'.

  const thoughts = {
    happy: 'Enjoying life!',
    sad: 'Feeling down.',
  };
  
  personOne.thoughts = thoughts;
  personTwo.thoughts = thoughts;
  personThree.thoughts = thoughts;
  
  // Modify a thought for one person.
  personOne.thoughts.happy = 'Feeling great!';
  
  console.log(personTwo.thoughts.happy); // Person Two's thought is also 'Feeling great!'
  console.log(personThree.thoughts.happy); // Person Three's thought is also 'Feeling great!'