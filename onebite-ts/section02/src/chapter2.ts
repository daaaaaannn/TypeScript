// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'im', 'daeun'];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, 'hello'];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, '2', true];

tup1.push(1);
tup1.pop();
// 배열 메서드를 사용할 때 튜플의 길이 제한이 발동하지 않는다.

const users: [string, number][] = [
  ['김다은', 1],
  ['김가은', 2],
  ['김나은', 3],
  ['김라은', 4],
  // [5, '김아은'],
];
// 이런 경우 튜플 사용한다.
// 배열을 사용할 때 인덱스의 위치에 따라서 넣어야 되는 값들이 이미 정해져 있고 그 순서를 지키는게 중요할 때 튜플 타입을 이용해서 값을 잘못 넣지 않도록 방지한다.
