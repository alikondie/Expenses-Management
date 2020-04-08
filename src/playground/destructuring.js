import { createPortal } from 'react-dom';

// Object destructuring

// const person = {
//   name: 'Andrew',
//   age: 25,
//   location: {
//     city: 'Philadelphia',
//     temp: 29
//   }
// };

// // const name = person.name;
// // const age = person.age;

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;

// console.log(`It's ${temperature} is ${city}`);

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName);

// Array destructuring

// const address = [
//   '1299 S Juniper Street',
//   'Philadelphia',
//   'Pennsylvania',
//   '19147'
// ];

// const [, city, state] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium  ${itemName} is ${mediumPrice}`);
