// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GEUST = 2,
}

enum Language {
  Korean = 'ko',
  English = 'en',
}

const user1 = {
  name: '김다은',
  // role: 0, // 0 <- 관리자
  role: Role.ADMIN, // 0이 저장된다.
  language: Language.Korean,
};

const user2 = {
  name: '김가은',
  role: Role.USER, // 1 <- 일반 유저
  language: Language.English,
};
const user3 = {
  name: '김나은',
  role: Role.GEUST, // 2 <- 게스트
};

console.log(user1, user2, user3);
