// 접근 제어자
// access modifier
// public, private, protected

class Employee {
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  work() {
    console.log(`${this.name} 일함`);
  }
}

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

  func() {
    // this.name; 오륩 발생생
    this.age;
  }
}

// 생성된 인스턴스는 객체이기 때문에 객체의 프로퍼티에 접근해서 값을 수정하는 것이 가능하다.
const employee = new Employee('김다은', 23, 'developer');
// employee.name = '홍길동';
// employee.age = 30;
employee.position = '디자이너';
