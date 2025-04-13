// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법을 말한다.

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  value; // string|number 타입으로 추론된다.
  // value.toFixed();
  // value.toUpperCase(); 오류발생
  if (typeof value === 'number') {
    console.log(value.toFixed()); // number 타입으로 추론된다.
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase()); // strgin 타입으로 추론된다.
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && 'age' in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}

// typeof를 통해 타입을 좁힐 수 있는 표현들을 타입 가드라고 부른다.
// 내장 객체들은 타입들이 제공된다.
// null 값에 typeof를 해도 object를 반환하므로 | null을 하면 getTime에 오류가 발생한다.
// instanceof 맞으면 true, 틀리면 false를 반환한다.
// 형식만 참조하다 = Person은 타입이다. => instanof 연산자는 우측에 타입이 들어오면 안된다. value instanceof Person
// Date는 JS의 내장 클래스이다.
