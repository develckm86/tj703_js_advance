console.log('Happy developing ✨');
//node js 크롬에서 사용하는 js 엔진(V8 c++)을 사용해 js를 컴파일 후 실행할 수 있다.
//node js 는 js 프로젝트에 라이브러리를 주입하거나(npm) 배포할 수 있다.

//변수 : 참조하는 데이터가 변경될 수 있는 것
let a=10;
--a;
++a;
var b=20; //스코프를 무시(사용하지 않음=>hoisting)
//상수 : 한번 참조한 데이터를 변경할 수 없는 것
const c=30;
//++c;

{{{
    var test=20;
    let test2=30;
    //변수는 선언된 영역이나 자식영역에서만 참조되기를 기대
    {      }
}}}
console.log("스코프를 무시하는 test",test);
//console.log("스코프 무시하지 않는 test2",test2);

a=20;//js는 정수가 없다 20.0
//c=20;
//기본형과 자료형
a=20.1; //실수 number

let name="ab"; //기본형 String => js는 문자열을 동적으로 다룬다.(저장은 기본형, 사용은 자료형)
const arr=['a','b'] //배열 : 데이터를 메모리에 순서대로 저장 + 길이
const obj={name:"경민",age:25}; //자료형
console.log("ab".at(0))

//Symbol(), Bigint, Boolean, null, undefined, number, string
let big=1232323232323232323232331231313123;//1.2323232323232323e+33
console.log(big)
big=1232323232323232323232331231313123n; //number가 표현하지는 못한는 큰 정수를 저장
//  문자는 문자표의 번호    a=97 b=98      9798  length=2
console.log(big)
let id=Symbol("경민");
let id2= Symbol("경민");
//Symbol.Iterator
console.log(id===id2)
// 기본형: 프로그램에서 많이 사용하는 데이터를 효율적으로 사용하기 위해 정의됨

let n=null; //비었다는 상태
let u; //undefined

//기본형 : 값자체 (리터럴 : 보이는 그대로가 값)
//자료형(참조형) : 참조하는 것이 존재하는 데이터 (new + [],{})

let str="안녕하세요!";//"" '' `` => 문자열
let list=new Array(); //자바스크립트의 배열 타입
list.push("안");
list.push("녕");
list.push("하");
list.push("세");
list.push("요");
list=["안","녕","하","세","요"];//배열의 리터럴 표기법
console.log(str)
console.log(list)
//js는 java의 List 같은 타입인 Array 뿐이다.

//java Array 와 List 차이점
// int [] nums={1,2,3,4}; Array
//List<Integer> numList=new ArrayList<>(); List




