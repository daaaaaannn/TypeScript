// 함수 타입 표현식
type Operation = (a: number, b: number) => number; // 타입 별칭
const add: Operation = (a, b) => a + b;
const sub: (a: number, b: number) => number = (a, b) => a - b; // 이것도 가능
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 호출 시그니처 (콜 시그니처)
type Operation2 = {
  (a: number, b: number): number;
  name: string; // 이런식으로 만드는 타입을 하이브리드 타입이라고 한다.
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

// 프로퍼티를 추가로 정의하면 Operation2 타입을 갖는 변수 add2와 같은 애들이 함수처럼 호출될 수 있고, 점 표기법으로 객체를 사용하듯 사용할 수 있다.
add2(1, 2);
add2.name;
