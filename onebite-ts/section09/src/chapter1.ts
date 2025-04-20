// 분산적인 조건부 타입
type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// let c: StringNumberSwitch<number>; |
// let c: StringNumberSwitch<string>;

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// let d: StringNumberSwitch<boolean>; |
// let d: StringNumberSwitch<number>; |
// let d: StringNumberSwitch<string>;

// 2단계
// number |
// string |
// number

// 결과
// number | string

// 실용적인 예제
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 3단계
// number | never | boolean
// 결과에 never가 포함되어 있으면 그냥 사라진다.
// number | boolean

// 예제2
type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
