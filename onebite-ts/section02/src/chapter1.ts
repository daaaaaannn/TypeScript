// number (:number - type 주석 또는 annotation)
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// num1='string' string을 할당 하려고 하면 오류뜬다.
// num1.toUpperCase() 문자열 전용 메서드도 사용할 수 없다.

// string
let str1: string = 'hello';
let str2: string = `hello`;
let str3: String = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// let numA: number = null;

// 리터럴 타입
// 리터럴 -> 값
let numA: 10 = 10;
// numA=20; 이렇게 못 넣는다. 10만 할당할 수 있다.
let strA: 'hello' = 'hello';
let boolA: true = true;
