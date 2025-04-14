// 함수 타입 정의
// 함수를 설명하는 가장 좋은 방법 => 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기 - js
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b;
}

// 반환값의 타입이 없어도 return 문을 기준으로 자동으로 추론된다.

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number): number => a + b;

// 함수의 매개변수
function introduce(name = '김다은', age?: number) {
  console.log(`nane : ${name}`);
  if (typeof age === 'number') {
    console.log(`age : ${age}`);
  }
}
introduce('김다은');
// age를 생략하고 싶으면 ?를 붙이면 된다.
// age에 커서를 올려보면 number|undefined 타입이다. 그래서 console.log에 만약 age+10하면 undefined인 경우 10을 더할 수 없기 때문에 오류가 발생한다.
// 만약 age+10하고 싶으면 typeGuard를 만들어 타입을 좁혀줘야 한다.

// 주의할 점
// 기본값과 다른 타입으로 매개변수의 타입을 정의하면 (name:number='김다은') 오류 발생
// 함수를 호출할 때 자동 추론된 매개변수의 타입과 다른 타입의 값을 인수로 전달하면 오류 발생 (introduce(1))
// 선택적 매개변수는 필수 매개변수(name과 같은 생략하면 안되는 매개변수) 앞에 오면 안된다. 그래서 age 뒤에 tall:number를 추가하면 오류가 발생한다.

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}
getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15

// 만약, 인수의 개수를 정하고 싶으면 튜플 타입으로 정의하면 된다. [number,number,number]
