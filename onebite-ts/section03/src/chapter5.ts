// 타입 추론
let a = 10;
let b = 'hi';
let c = {
  id: 1,
  name: '김다은',
  profile: {
    nickname: 'dan',
  },
};

let { id, name, profile } = c;

let [one, two, three] = [1, 'hi', true];

function func(message = 'hi') {
  return 'hi';
}

let d; // any 타입으로 추론된다.
d = 10; // number 타입으로 추론된다.
d.toFixed();
// d.toUpperCase(); string 메서드는 사용 불가하다.
d = 'hi'; // string 타입으로 추론된다.
d.toUpperCase();

const num = 10; // 숫자 리터럴 타입으로 추론된다.

let arr = [1, 'string']; // string과 number의 유니온 타입을 갖는 배열타입으로 추론된다.
