// 인터페이스
interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: '김다은',
  sayHi: function () {
    console.log('hi');
  },
};
person.sayHi();
person.sayHi(1, 2);

// person.name='김가은' 오류 발생
// 함수 타입식 : sayHi:()=>void
// 오버로딩을 사용하고 싶은 경우, 함수 타입식이 아닌 호출 시그니처를 사용해야 한다.
// 인터페이스로 만든 객체의 타입에는 합집합, 곱집합 타입으로 만들 수 없다.
// 사용하고 싶은 경우 타입 별칭에 활용해야 한다.
type Type1 = Person | number;
type Type2 = Person & number;
// 혹은 const person:Person | number 이런식으로 작성해야 한다.
