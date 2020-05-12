var calc = {}; //변수 선언 , 객체 할당

calc.add = function (a, b) {
  return a + b;
}; //calc객체 속성 정의, 함수 할당 //익명함수

console.log("모듈로 분리하기 전 - calc.add :" + calc.add(10, 10));
