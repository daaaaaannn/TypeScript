// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: '김다은',
  nickname: '단',
  birth: '2003.09.01',
  bio: '안녕하세요',
  location: '영통구',
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
