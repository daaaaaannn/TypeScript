// 인터페이스 확장
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  isBark: boolean;
}

const dog: Dog = {
  name: '콩이',
  age: 10,
  isBark: false,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// name과 age같은 중복된 프로퍼티 정의가 너무 많다. => 비효율적
// extends를 이용해서 다른 인터페이스로부터 해당 인터페이스가 가지고 있는 모든 프로퍼티를 자동으로 다 포함하도록 해주는 문법을 확장이라고 한다.(=상속)
// 상속을 받는 인터페이스에서 동일한 프로퍼티의 타입을 다시 정의할 수 있다.
// 다시 정의하려고 하는 타입이 원본 타입의 서브 타입이어야한다.
// 인터페이스는 객체타입이면 다 확장할 수 있다. 예를 들어 Animal이 interface가 아닌 type으로 정의했더라도 가능하다.

interface DogCat extends Dog, Cat {}
const dogCat: DogCat = {
  name: '콩이',
  age: 10,
  isBark: true,
  isScratch: true,
};
