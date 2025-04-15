// 클래스
let studentA = {
  name: '김다은',
  grade: 'A+',
  age: 23,
  study() {
    console.log('열심히 공부 함');
  },
  introduce() {
    console.log('안녕하세요!');
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log('열심히 공부 함');
  }
  introduce() {
    console.log(`안녕하세요! ${this.name}입니다!`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student('김다은', 'A+', 23);
studentB.study();
studentB.introduce();

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentC = new StudentDeveloper('김다은', 'A+', 23, 'React');
