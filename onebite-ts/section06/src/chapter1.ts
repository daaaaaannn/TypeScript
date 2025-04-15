// 타입 스크립트의 클래스
const employee = {
  name: '김다은',
  age: 23,
  position: 'developer',
  work() {
    console.log('일함');
  },
};

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log('일함');
  }
}

const employeeB = new Employee('김다은', 23, '개발자');

const empployeeC: Employee = {
  // 클래스에서 정의한 필드들과 메서드까지 가지고 있어야 되는 객체 타입으로 정의된다.
  name: '',
  age: 0,
  position: '',
  work() {},
};
// 타입스크립트의 클래스틑 타입으로도 활용할 수 있다.
// 이유는 타입스크립트는 구조적으로 타입을 결정하는 구조적 타입 시스템을 따르기 때문이다.

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
// super를 생략하거나 position 같은 매개변수를 작성하지 않으면 오류 발생
// JS보다 비교적 안전하게 사용할 수 있다. (오류 발생)
