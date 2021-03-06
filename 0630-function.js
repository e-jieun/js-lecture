// *함수의 의의
// 1. 함수 하나를 잘 만들어 놓으면 재활용성(reusability)이 있다
// 2. 함수를 잘 쓰면 도저히 사람이 할 수 없는 레벨까지 작업이 가능하다
// 기계화의 큰 특징 -> 시작이 함수, 끝도 함수 => 함수를 잘 쓰려고 노력을 많이 한다
// 작성법 -> 작성법보다는 '논리'

// *함수의 주요 키워드
// 1. 함수를 선언한다 -> function funcName(){}
// 2. 함수 호출 => 재활용성 때문 => 호출이 많으면 함수가 잘 쓰이고 있다
// 3. 매개변수 -> 입구의 역할을 하는 녀석
// 매개변수(인자, param), argument(인수), arguments(매개변수가 사실은 배열, 반복자, iterator), callback, data-type 지정이 가능
// 4. 정수기, 톱니바퀴
// 5. 출구 => return: 7개의 데이터 타입 말고는 나오지 않음(함수 사실 객체)
// => 외울 부분
// !!!!!6. 실행부: 알고리즘 영역(execution) => 어려운 부분

function one(ipgoo){
  // console.log('야호');  //실행부 -> 실행 끝
  // return "메롱";  
  // console.log(2);
  // !함수를 쓰면 '내가 편해진다'
  // 함수를 쓰면 컴퓨터에게 맡기자는 일이 된다 => 사람의 일
  // !=> 판단만 잘 시키면 된다
  if(ipgoo === 'babo'){
    return 'i am not babo';  //!절대 변하지 않는 불변성
  } else{
    return 'cheonjae';
  }
}
// console.log(one() === "메롱");  //호출부 -> 결과물을 보는 부분
console.log(one('yes'));

// *functional programming
// 함수를 의존하고 있는데 안 쓰면 emit코딩도 모두 함수
// 불편하지만 일일이 판단시켜주는 작업 === 본업
// css, html은 판단을 알아서 해주는 작업 => ex)<h1>
// 판단을 이미 시켜놓은 것 때문에 판단을 어떻게 시켰는지 확인해야한다
// 더 세밀한 제어를 하기 위해서

// *분기 제어(branch control)가 된다 => '경우의 수'를 제어