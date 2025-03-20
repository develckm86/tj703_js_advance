//비동기 코드 (작성한 코드가 그 다음 코드와 연관 없이 동작하는 것 )
//setInterval,setTimeout => 타이밍 함수
//XMLHttpRequest, fetch API  => ajax 비동기식 통신
let num=0;

setTimeout(()=>{num++;},1000);
console.log(num); //1이되는 것을 기대하는 것을 코드간의 동기가 됨




//Promise : 비동기 코드의 특정 시점을 resolve로 동기화 가능
new Promise((resolve)=>{
    setTimeout(()=>{
        num++;
        resolve("n이 증가 했습니다.");
    },500);
}).then((resolveMsg)=>{ //resolve가 실행될 때까지 기다렸다 실행=>(n이 증가하는 시점을 동기화)
    console.log(resolveMsg);
    console.log(num)
})
//자바스크립트 비동기 코드의 동작 원리와 이벤트 루프
//자바스크립트는 멀티스레드를 지원하지 않지만 비동기 코드를 작성할 수 있다.
//동작원리는 타이밍함수(setTimeout,setInterval)와 비동기식통신(fetch)과 이벤트리스너(Web API)를
//바로 실행하지않고 나머지 코드를 먼저 실행한다. 위의 웹 api를 이벤트 loop에 의해 반복 실행하면서
// 비동기 코드가 생성됩니다.


//면접 질문
//1.자바스크립트의 스레드는 몇개인가요?
//2.스레드는 1개인데 비동기식 코드가 생성되나요? 멀티스레드처럼 동작하나요?
//web Api는 실행을 미루고 이벤트 루프에 의해서 실행되기 때문


