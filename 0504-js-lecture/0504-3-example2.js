// // global scope(전역변수): 함수 어디든 가능
// // 실행하자마자 메모리에 넣는다
// // 언제든지 꺼낸
// let a = 1;
// // console.log(a); //  1s

// function b (){
//   // 함수 b는 목적이 콘솔 찍고 종료하는 기계
//   // return 값은 없다 => undefined가 리턴
//   console.log(a);
//   // local scope(지역변수): scope안의 영역만
//   // return 값으로 가능하다
//   // let c = '이지은';
//   var c = '이지은'; // 로컬과 전역 개념의 혼동이 생김
//   return c;
// }

// // result가 아니므로 호출만 해준다
// b();

// // console.log(c);
// console.log(b());

// // 전역 vs. 지역(global vs. local)
// /* 지역
// : 함수 안에 있는 변수를 !지역변수!라고 한다
// local variable
// 함수가 종료되면 사라짐
// 리턴으로 지역변수를 값으로 가져올 수는 있다 */

// /* 전역
// : 어디서나 접근이 가능하지만 무거워진다
// 맨날 살아있기 때문에 언제 바뀔지 모른다 === const를 사용하는 이유 => 코드 디버깅에 매우 불편 */ 

// // js의 장점 === 중괄호 영역 구분
// // 영역 구분이 확인하기 편리

// -------------------------------------------------------------------------

let current = 0;

// 익명함수 === 메서드는 있지만 이름은 없는 상태
// setInterval(); -> 주기적으로 뭔가를 실행시키는 간격을 만들어주는 함수(코어 메서드 중 하나)
// clearInterval(); -> 종료해주는 메서드

// 매개변수 -> function(){}, 주기(1000ms === 1s)
// clearINterval();을 넣을 수 있도록 
let timer = setInterval(function(){
  console.log(current);
  current++;
  // 1분이 경과되면 콘솔을 찍어줘
  // 종료시점은 if문으로
  // 
  if(current === 60){
    console.log('1분 경과');
    clearInterval(timer);
  }
  // 16으로 하면 1per 60frames가 된다 === 애니메이션 만들 때 많이 쓰이는 방법
}, 100);

// 터미널에선 ctrl+c 누르면 파일이 종료

// ==========================================================================>

// addEventListener(); => DOM API method === 문서 외에는 못 씀
// setInterval();, clearInterval(); : 주요 메서드 바닐라 자바스크립트, 주기적 반복을 종료시키는 메서드
// 식별, 익명함수이기 때문에 가리키는 것을 안하면 !찾을 방법이 없음!
// === !함수 리터럴!, !함수 표현식! === 익명함수를 마치 기명함수처럼 사용