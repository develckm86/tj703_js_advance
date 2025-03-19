//js 자료형 Object,Array
//java 자료형 class,Array[]

const arr=["가","나","다","라","마","바"];
//0의 필드가 "가" =>(x)
//0번째(index)에서 "가"를 찾는다 (0)
console.log(arr[0],arr[1],arr[2]);
console.log(arr.length);
//배열 자료형을 왜 사용하나요? => 순서가 있는 데이터를 효율적(반복문,메모리)으로 사용하기 위해서
const obj={0:"가",1:"나",2:"다"}

//배열의 유용한 함수
//forEach
//map
//filter
//sort

//slice
//splice
//shift,unshift,join,concat()+, push(),pop(),at(),flat()
//..
//배열의 앞 데이터가 추가 삭제되면 뒤쪽 데이터가 앞으로 이동하거나 뒤로 이동한다. (연산이 필요,자연스럽지 않음)
arr.push("사"); //배열의 맨 뒤에 삽입
console.log(arr)
arr.pop() //배열의 맨 뒤에 데이터 삭제
console.log(arr.pop())
console.log(arr)
//Array.slice() : 기존에 배열에서 데이터를 추출한 후 새 배열로 반환!!!(기존 배열을 변경하면 안될 때)
console.log(arr.slice(1,4));
console.log(arr)
console.log(arr.slice()); //매개변수로 아무것도 쓰지 않으면 복제
console.log(arr===arr.slice());//false 복제, true 기존의 배열을 반환

// ... 스프레드 문법(전개 문법) (배열을 복제하거나 데이터를 추출할때)

const copyArr=[...arr];
console.log(copyArr);
console.log(arr===copyArr)

const arr2=['z',...arr,'사','아']
console.log(arr2);


const nums=[10,20,30];
let a=nums[0];
let b=nums[1];
let c=nums[2];
let [x,y,z]=nums; //x,y,z let 으로 선언됨
console.log(a,b,c)
console.log(x,y,z);
console.log(sum(nums[0],nums[1],nums[2]));
console.log(sum(...nums));
function sum(a,b,c){
    return a+b+c;
}

let [n,...n2]=nums;
console.log(n,n2);

const obj2={name:"경민",age:39,childs:[{a:1},{a:2}]}
console.log(obj2);
const copyObj={...obj2}
console.log(copyObj);
console.log(obj2===copyObj);
//Array.splice : 기존 배열의 데이터를 삭제 또는 추가하기 사용하는 함수
console.log(arr)
console.log(arr.splice(0,1,"A","B"));
console.log(arr)
console.log(arr.slice(0,1));
console.log(arr)
//Array.sort : 기존 배열을 정렬

const nums2=[77,-7,100.1,8,0]
// nums2.sort();//sort()는 문자열을 오름차순 정렬,숫자를 정렬하면 앞자리만 정렬
// console.log(nums2);
// nums2.sort((a,b)=>a-b); //수의 오름차순 ASC
// console.log(nums2);
// nums2.sort((a,b)=>b-a); //수의 내림차순 DESC
// console.log(nums2);
//기존 데이터를 변경없이 정렬하려면 복사 후 정렬
console.log([...nums2,-55].sort((a,b)=> a-b));
console.log(nums2);
console.log(nums2.slice().sort((a,b)=> b-a));
console.log(nums2);

const stus=[
    {id:11,name:"경민"},
    {id:1,name:"상혁"},
    {id:33,name:"혜성"},
    {id:2,name:"영중"},
];
console.log(stus);
console.log([...stus].sort((s1,s2)=>s1.id-s2.id));


const strArr=["레몬","사과","수박","오렌지","귤"];
console.log([...strArr].sort());
const timeArr=["07:33","13:22","12:00","23:11","03:10","03:01","12:11"];
//[[07,33],[13,22]...]
console.log([...timeArr].sort((a,b)=>a.localeCompare(b)));//문자열 오름차순
console.log([...timeArr].sort((a,b)=>b.localeCompare(a)));//문자열 내림차순

const timeArr2=[];
for(let time of timeArr){
    timeArr2.push(time.split(":"))
}
console.log(timeArr2);
//기존 배열을 다른 배열로 바꾸는 일이 많이 존재
//Array.map() : 배열을 복제한 후 콜백함수가 반환하는 데이터로 바꾼다.
const timeArr3=timeArr.map((time)=>time.split(":"));
console.log(timeArr);
console.log(timeArr3);
//Array.filter() : 배열을 복제한 후 콜백함수가 true 를 반환하는 위치의 데이터만 남긴다.

const numTestArr=[1,2,3,'사',4,5,6]; //수만 존재해야함



console.log(isNaN('사')); //isNaN : 데이터를 수로 형변환 하려는데 수가 아닌지 확인
console.log(isNaN(3)); //false
console.log(isNaN("33"));//false
console.log(typeof "33" );//"string"
console.log(typeof 13);//"number"
console.log(typeof 13 === "number");
console.log(Number.isInteger(13))
console.log(Number.isInteger(12.0));
console.log(Number.isInteger(12.01));
console.log(Number.isInteger("12"));
// 자바스크립트는 실수가 number 타입  12.0 === 12 true 이면서 같은 데이터
// 자바에서 12.0 == 12 true 이지만 다른 데이터 12.0(double) 12(int)

//Number.isNaN :형변환 없이 NaN인지 검사
console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN("사")) //false
console.log(Number.isNaN("사"-1)); //"사"-1 =>"사"를 수로 형변환 -> NaN-1 -> NaN


const originNums=numTestArr.filter((n)=>{
    return typeof n==='number';
})
console.log(originNums);
console.log(numTestArr);
const timeArrTest=["07:33","13:22","12:00","23:11","03:10","03:01","12:11"];
//
//1.timeArrTest를 [{h:'07',m:'33'},{h:'13',m:'22'},{h:'23',m:'11'}...] 변경한 배열을 반환(map)
//2. 1번에서 반환한 배열을 시간이 오전인 것만 찾아서 반환(filter)
//3. 2을 시간순(ASC)으로 정렬하세요!

const stusTest=[
    {id:11,name:"경민"},
    {id:1,name:"상혁"},
    {id:33,name:"혜성"},
    {id:2,name:"영중"},
];
//4.{id:3, name:"test"} 학생을 포함하는 새로운 stusTest를 만드세요 (...)
//5.id가 11인 학생을 제외한 배열을 만드세요.
