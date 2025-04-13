// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입을 말한다.
// string과 number의 경우 서로소 유니온 타입이다.

type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};
type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};
type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  switch (user.tag) {
    case 'ADMIN': {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case 'MEMBER': {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
      break;
    }
    case 'GUEST': {
      console.log(
        `${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`
      );
      break;
    }
  }

  // if (user.tag === 'ADMIN') {
  //   console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  // } else if (user.tag === 'MEMBER') {
  //   console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  // } else {
  //   console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
  // }
}

// 복습
// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: 'LOADING';
};
type FailedTask = {
  state: 'FAILED';
  error: {
    message: '오류 발생 원인은 ~~';
  };
};
type SuccessTask = {
  state: 'SUCCESS';
  response: {
    data: '데이터 ~~';
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processReasult(task: AsyncTask) {
  switch (task.state) {
    case 'LOADING': {
      console.log('로딩 중...');
      break;
    }
    case 'FAILED': {
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    }
    case 'SUCCESS': {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: 'LOADING',
};
const failed: AsyncTask = {
  state: 'FAILED',
  error: {
    message: '오류 발생 원인은 ~~',
  },
};
const success: AsyncTask = {
  state: 'SUCCESS',
  response: {
    data: '데이터 ~~',
  },
};

// 동시에 여러가지 상태를 표현해야 하는 객체 타입을 정의할 때는 선택적 프로퍼티를 사용하는 것 보다는 상태에 따라 타입들을 잘게 조개어 state나 태그 같은 프로퍼티들을 추가해서 서로소 유니온 타입으로 만들어주는게 훨씬 좋다.
// tag를 붙여서 객체들을 완벽히 구별해 줄 수 있는 기능이기 때문에 태그도 유니온 타입이라고 한다.
