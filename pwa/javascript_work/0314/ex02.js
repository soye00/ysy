/*

클로저함수
- 렉시컬 환경의 조합을 의미
- 클로저는 함수가 외부 스코프의 변수에 접근할 수 있게 해주며, 해당 변수의 생명 주기를 연장시킴.
이를 통해 데이터 은닉, 상태유지, 콜백함수등 다양한 기능을 구현
- 외부 함수가 실행을 마쳐도, 내부 함수가 외부 함수의 변수에 접근할 수 있도록 변수가 메모리에 유지

- 클로저의 핵심: 함수가 자신이 선언된 환경(외부 변수들)을 '기억'하고, 해당 함수가 실행될 때
그 환경에 접근할 수 있는 능력

1. 중첩함수 일 것
2. 내부함수에서 외부함수에 있는 변수 참조
3. return 값이 함수 일 것

 */

function outer(){
    var x = 1;
    return function inner(){
        console.log(x++);
    }
}

const out1 = outer();
out1(); // > 1
out1(); // > 2
out1(); // > 2