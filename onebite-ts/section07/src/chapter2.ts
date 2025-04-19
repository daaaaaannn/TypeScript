// map 메서드

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);

function map<T, U>(arr: T[], callback: (item: T) => U) {
  // 어떤 배열에 적용할 지, 어떤 함수에 적용할 지
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (it) => it * 2);
map(['hi', 'helo'], (it) => it.toUpperCase());
// 만약, `parseInt(it)`을 하게 되면 오류가 발생한다.

// forEach 메서드
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
});

forEach(['123', '456'], (it) => {
  it;
});
