// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것이다.
// 확인해야 할 2가지
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업캐스팅
// b = a;  오류 발생 (다운 캐스팅)

// 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; 업캐스팅인데 오류 발생
d = c; // 다운캐스팅

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

// 매개변수 기준으로 생각하기. dog를 할당하면 매개변수는 Animal, 안에 내용은 Dog에 해당하는 걸 가져야 한다.
let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};
// animalFunc=dogFunc 오류 발생
// let testFunc = (animal: Animal) => {
//   console.log(animal.name);
//   console.log(animal.color);
// }; 이렇게 하는 것과 동일함

// 매개변수의 타입을 기준으로 함수 타입의 호환성을 판단할 때는 업 캐스팅일때는 안되고 다운 캐스팅일때는 된다.

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; 오류 발생
// 갯수가 다를 때의 기준을 적용하려면 타입은 같아야 한다.
