//변수,상수 : 데이터를 재사용하기 위해 참조
//함수 : 실행의 집합을 재사용하기 위해 정의 (매개변수,리턴)
//매개변수 : 함수의 실행을 변화시키는 역할
//리턴  : 함수의 결과


a(100,200); //함수의 호이스팅(js 엔진이 컴파일 시 함수만 먼저 저장해서)


function a(n1,n2){
    console.log(n1+n2);
}

a(10,20);


const b=function(n1,n2){
    return n1+n2;
}//이름이 없는 함수 == 익명함수

//익명함수를 변수가 참조하는 형식 => 익명함수는 컴파일시 저장되는 함수에서 제외 함수의 호이스팅을 막는다.
//함수의 호이스팅을 막는이유?? 메모리에 너무 많은 함수를 저장할 필요가 없을 때,

//자바스크립트는 프로토타입 언어!
//함수를 정의하면 프로토타입(객체)이 생성되고 프로토타입을 기반으로 객체를 생성
//객체의 부모는(__proto__) 프로토타입의 객체가 됩니다.

//자바스크립트의 상속
//프로토타입간의 링크가 상속

//객체지향문법 면접
//this 는 무엇인가요? : 타입의 필드접근자입니다. super 는 부모의 필드 접근자입니다.
//override(타입의 재정의) : 부모의 함수를 재정의 하는 것이고
// 다형성(1개의 이름이 역할이 여러개)의 일부입니다.
//overload : 함수의 매개변수 타입이나 수에 따라 역할을 나누는 것 다형성
//sum(int a, int b)
//sum(int a, int b, int c)
//sum(ars[])
//자바스크립트의 함수는 오버로드를 할 수 없지만 매개변수의 기본값을 정의할 수 있습니다.
function sum(a,b,c=0){
    return a+b;
}
// function sum(a,b,c) {
//     return a+b+c;
// }
//자바스크립트는 함수형언어기 때문에 함수이면서 타입(==class)이 될 수 있다.
//타입인 함수의 특징
//1.this 가 작성됨 (**)
//2.이름이 파스칼규칙
//3.전역 return 이 없음


function User(name,age){
    this.name= name;
    this.age=age;
    this.say=function(){
        return this.name+" 안녕";
    }
   //return; 타입은 객체를 반환하기 때문에 return 이 없다.
}

//this 바인딩 리액트의 클래스문법을 사용할 때 면접!!

//함수 내에서 this를 정의하면 그것을 타입을 명시한 것
//this(이것) : 타입이 객체가 되었을 때 필드를 참조한다. (객체 자신)
const u=new User("경민",40);
console.log(u);
console.log(new a(1,2))

//js 화살표 함수 this가 존재하지 않는다.???

const sum=(a,b)=>{
    return a+b
};
console.log(sum(101,102))
//console.log(new sum(101,102));
//화살표 함수는 타입이 될 수 없다.
//자바스크립트에서 함수(function)가 타입이 될 수 있는 이유 모든 함수가 Object 프로토타입을
//참조하기 때문(Object.prototype 에서 객체를 만드는 생성자를 재공)
//화살표함수는 함수 전용으로 만들어졌기 때문에 Object 프로토타입을 참조하지 않는다.

//js는 프로토타입 언어(함수를 정의하면 프로토타입을 만들놓고 프로토 타입을 기반으로 객체 생성)
//java 의 상속은 부모의 필드를 내것으로 모두 가져오지만 js 상속은 __proto__ 로 링크만 가진다.


function Student(name,age){
    this.name=name;
    this.age=age;
    this.say=function(){
        console.log(`function ${this.name}(${this.age}) 안녕`);
    }
    this.say2=()=>{
        //say2 화살표함수는 Student 함수 내부에 정의 되었기 때문에 무조건** this==Student 객체
        console.log(`()=>{} ${this.name}(${this.age}) 안녕`);
    }
}
const s=new Student("기원",20);
//function 함수는 실행하는 객체를 this 로 갖는 == this 바인딩



//화살표 함수는 자체적으로 this 를 가지고 있지 않아서
// 정의된 위치에서 가장 가까운 부모함수의 this 를 따른다.


s.say(); //say() 를 실행한는 s가 this
s.say2(); //say2() 가 포함된 student 가 this
let sayHello=s.say;
let say2Hello=s.say2;
sayHello(); //say()를 실행하는 전역 this
say2Hello();//화살표함수는 무조건 포함된 함수가 this


// sayHello=function (){
//     console.log(`${this.name}(${this.age}) 안녕`);
// }
name="전역"; //let var cont 를 사용하지 않으면 전역 this 에 필드를 정의
//window.name="전역"; //브라우저에서 실행중이라면
sayHello(); //실행하는 주체 전체영역 this


/*
// function clickHandler(){
//     console.log(this.value)
// }
// btn.onclick=clickHandler;
//
// clickHandler(); => this==window => log(window.value=>undefined)
// 버튼을 클릭했을 때 => this==btn => log(btn.value)
*/

function User(name){
    this.name=name;

    //say 1초 뒤에 말하는
    this.say=function (){
        //setTimeout(this.sayCallback,2000)
        //say()를 실행하면 전역(window)이 1000 밀리초 뒤에 재정의 한 콜백함수를 실행
        const sayHello=this.sayCallback.bind(this);
        //함수를 실행하는 주체와 상관없이 this 를 고정한 새로운 함수를 생성
        setTimeout(sayHello,2000);
    }
    this.sayCallback=function(){
        console.log(this.name+"아 안녕!")
    }

    this.say2=function (){
        setTimeout(()=>{
            console.log(this.name+"아 안녕!")
        },3000);
    }
}
const user=new User("경민");
user.say();
user.say2();
//js 화살표함수를 사용하는 이유 !!
//function 함수가 실행하는 주체의 this 를 바인딩하기 때문에
//타입을 정의했을 때 콜백함수가 타입의 this 를 바인딩하기를 기대하지만 그렇지 않은 경우가 발생하기 때문에
//타입 내에서 콜백함수는 화살표 함수로 정의합니다.
//콜백함수 : 어떤 객체가 사용할 함수를 재정의 하는 것



