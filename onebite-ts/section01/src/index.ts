// console.log('Hello TypeScript!');
// const a: number = 1;

// const func = () => {
//   console.log('Hello');
// };

// import { hello } from './hello';
// hello();

const a = 1;

// 모든 TS 파일을 전역 모듈로 본다. 즉, 파일을 만들어봤자 모두 같은 공간에 있다고 간주한다.
// 해결 방법 1. export{}나 import와 같은 모듈 시스템을 사용하는 문법 키워드를 파일 내 한 번 이상 작성하면 독립된 공간(모듈)으로  본다.
// 2. tsconfig.json에 옵션 하나를 추가해서 해결할 수 있다.
