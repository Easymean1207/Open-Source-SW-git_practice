// 함수 선언문 (Function Declaration)
function logText1(msg) {
  msg = `${msg} logText1`;
  word = `This is ${msg}`;
  return word;
}

// 함수 표현식 (Function Expression)
const logText2 = function (msg) {
  msg = `${msg} logText2`;
  word = `This is ${msg}`;
  return word;
};

// 화살표 함수 (Arrow Function)
// 함수 표현식의 확장 개념
const logText3 = (msg) => {
  msg = `${msg} logText3`;
  word = `This is ${msg}`;
  return word;
};

const addNumber = (a, b) => a + b;

console.log(addNumber(1, 2));
