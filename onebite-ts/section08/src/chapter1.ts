// keyof 연산자
// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person = {
  name: '김다은',
  age: 23,
};

getPropertyKey(person, 'name');
