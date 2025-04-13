// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar: any = 10;
// anyVar = 'hello'; => 오류발생, TS는 우리가 타입을 지정하지 않아도 초기화하는 값을 기준으로 변수의 타입으로 자동 추론한다.

// JS 변수를 쓰듯 타입 검사 없이 아무 값이나 담고 싶을 때 any 사용
anyVar = 'hello';
anyVar = true;
anyVar = {};
anyVar = () => {};

// 메서드도 자유롭게 사용할 수 있다.
anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
//
let unknownVar: unknown;
unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; 오류

if (typeof unknownVar === 'number') {
  num = unknownVar;
}
