// 함수 오버로딩
// 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
// 하나의 함수 func, 모든 매개변수의 타입은 number이다.
// Ver1. 매개변수 1개 -> 이 매개변수에 20을 곱한 값 출력
// Ver2. 매개변수 3개 -> 이 매개변수들을 다 더한 값을 출력

// 버전들 -> 오버로드 시그니처
// 선언식만 써놓은 것, func 함수의 버전이 2가지가 있다는 것을 오버로드 시그니처를 통해 알려준다.
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니처
function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);
func(1, 2, 3);

// 함수가 오버로드 시그니처를 가지고 있으면 함수를 호출할 때 인수들의 타입이 구현부에 정의된 매개변수의 개수나 타입에 따르지 않고 오버로드 시그니처 중 하나의 버전을 따라간다.
// 오버로드 시그니처들의 매개변수의 개수에 차이가 있다면 선택적 프로퍼티로 매개변수들을 정의해서 모든 오버로드 시그니처들이 의미가 있도록 만들어 주어야 한다.
