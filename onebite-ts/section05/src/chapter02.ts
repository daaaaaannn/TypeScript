// 선언 합침
interface Person {
  name: string;
}

interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  name: 'hello';
}

const person: Person = {
  name: '',
  age: 23,
};
// 인터페이스는 동일한 이름으로 중복 선언이 가능하다.
// 중복 선언을 하면 모든 선언이 합쳐진다.
// 동일한 프로퍼티를 중복 정의하는데 타입을 다르게 정의하는 경우를 충돌이라고 한다. 타입이 다르면 안되고 서브 타입("hello")으로도 정의하면 안된다.

// 모듈 보강

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}
const lib = {
  a: 1,
  b: 2,
  c: 'hello',
};
