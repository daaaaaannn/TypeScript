// 맵드 타입
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in 'id' | 'name' | 'age']?: User[key];
};

type BooleanUser = {
  [key in keyof User]?: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};
// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  //...기능
  return {
    id: 1,
    name: '김다은',
    age: 23,
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ...수정하는 기능
}

updateUser({
  id: 2,
});

// const user = fetchUser();
// user.id = 1;
// 불가능

// 맵드 타입은 인터페이스에서 사용 불가능하다.
