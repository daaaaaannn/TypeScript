// 타입 단언

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = '김다은';
person.age = 23;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: '콩이',
  color: 'white',
  breed: '말티즈',
} as Dog;

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; 교집합이 없는 타입이다.
let num3 = 10 as unknown as string;

// const 단언
let num4 = 10 as const; // number -> number 리터럴 타입

let cat = {
  name: '야옹이',
  color: 'yellow',
} as const;
// string -> readonly , 프로퍼티의 값을 수정할 수 없다.

// Non Null 단언
// 어떤 값이 null이거나 undefined이 아니라고 TS 컴파일러에게 알려주는 역할을 한다.
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글1',
  author: '김다은',
};

const len: number = post.author!.length;
