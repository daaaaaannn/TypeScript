// 대수 타입
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재한다.

// 합집합 타입 - Union
let a: string | number | boolean | undefined | null;
a = 1;
a = 'hi';
a = true;

let arr: (number | string | boolean)[] = [1, 'hi', true];

type Dog = {
  name: string;
  color: String;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: '',
  color: '',
};

let union2: Union1 = {
  name: '',
  language: '',
};

let union3: Union1 = {
  name: '',
  color: '',
  language: '',
};

// let union4: Union1 = {
//   name: '',
// };
// 오류 발생

// 2. 교집합 타입 - Intersection
let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: '',
  color: '',
  language: '',
};
// 프로퍼티 3개 중 하나라도 빠지면 Intersection 타입에 속하지 않는다.
