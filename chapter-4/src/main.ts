// module 20 - typeof

const person = { name: 'Gore', age: 34, isProgrammer: true };
// const people: { name: string; age: number }[] = [];
// can write as typeof
// a way to specify types without manually typing types
const people: (typeof person)[] = [];

people.push(person);
people.push({ name: 'Gavin', age: 25, isProgrammer: false });
// people.push(2);

console.log(people);

// // module 19 - keyof

// // keyof will return value of a specific key in an object
// type Person = {
//   name: string;
//   age: number;
//   isProgrammer?: boolean;
// };

// const age = getValue('age', { name: 'Gore', age: 34 });

// function getValue(key: keyof Person, person: Person) {
//   return person[key];
// }

// // module 18 - readonly

// // can add "readonly" to type so that way it cannot be changed
// type Person = {
//   readonly id: number;
//   name: string;
//   age: number;
// };

// const person: Person = { id: 1, name: 'Gore', age: 34 };
// // person.id = 2;

// type NumberArray = readonly number[];
// const nums: NumberArray = [1, 2, 3];

// // module 17 - intersections
// type Person = {
//   name: string;
//   age: number;
// };

// type Todo = {
//   complete: boolean;
// };

// // interface Person {
// //   name: string;
// //   age: number;
// // }

// // interface Todo {
// //   complete: boolean;
// // }

// // combines person type and adds id type
// // type PersonWithId = Person & { id: string };
// // interface PersonWithId extends Person, Todo {
// //   id: string;
// // }

// // cannot use primitive values, like number, in a union
// // cannot have object and number at the same time
// type PersonWithId = Person &
//   Todo & {
//     id: string;
//   };

// const person: PersonWithId = {
//   name: 'Gore',
//   age: 34,
//   id: 'some-id',
//   complete: true,
// };

// // module 16 - unions
// // let id: string | number = '7';
// // id = 7;

// type Todo = {
//   name: string;
//   // status: string;
//   // can be written as specific strings
//   status: 'Complete' | 'Incomplete' | 'Draft';
// };

// // const todo: Todo = { name: 'Laundry', status: 'Complete' };

// // union of multiple different types
// // cannot use interface for unions of different types
// // need to use type
// type Person = {
//   name: string;
//   age: number;
// };

// type TodoPerson = Todo | Person;

// const todo: Todo = { name: 'Laundry', status: 'Complete' };

// module 11 - defining functions

// function printName(name: string, name2: string) {
//   console.log(name, name2);
// }

// return type for function
// function sum(a: number, b: number): number {
//   return a + b;
// }
// const c = sum(1, 2);

// // passing object type
// function printPerson(person: { name: string }) {
//   console.log(person.name);
// }

// // printPerson({ name: 'Gore' });

// const person = { name: 'Gore', age: 34 };

// printPerson(person);

// module 10 - types and interfaces

// // type Person = {
// //   name: string;
// //   age: number;
// //   isProgrammer?: boolean;
// //   friends: string[];
// //   address: {
// //     street: string;
// //   };
// // };

// // interface can only be used with objects
// interface Person {
//   name: string;
//   age: number;
//   isProgrammer?: boolean;
//   friends: string[];
//   address: {
//     street: string;
//   };
// }

// const person: Person = {
//   name: 'Gore',
//   age: 34,
//   isProgrammer: true,
//   friends: [],
//   address: {
//     street: '123 Fake St',
//   },
// };

// const person2: Person = {
//   name: 'Cheese',
//   age: 36,
//   isProgrammer: false,
//   friends: [],
//   address: {
//     street: '123 Fake St',
//   },
// };
