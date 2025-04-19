// 제네릭
// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
let bool = func(true);
let str = func('string');
// value: any로 작성하면 전부 any 타입으로 리턴된다.

// 만약 any 대신 unknown
