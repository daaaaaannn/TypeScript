// void
// 아무것도 없음을 의미하는 타입

function func1(): string {
  return 'hello';
}

function fun2(): void {
  console.log('hello');
  // 이와 같이 아무것도 반환하지 않을 때 void를 작성해준다.
}

// never
// 불가능한 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
