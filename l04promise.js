new Promise((resolve)=>{
    resolve();
}).then(()=>{
    return new Promise((resolve)=>{
        resolve();
    })
}).then(()=>{

});
let cnt=0;
let data=null;
//cnt 1초 뒤에 1로 늘리고
//cnt가 1일 되면 1초 뒤에 data="완료" 로 한다.
// setTimeout(()=>{cnt++;},1000);
// console.log(cnt); //0
// setTimeout(()=>{data="완료";},1000)
// console.log(data); //null
new Promise((resolve)=>{
    setTimeout(()=>{
        cnt++;
        resolve(cnt);
    },1000)
}).then((n)=>{
    console.log(n); //1
    return new Promise((resolve)=>{
        setTimeout(()=>{
            data="완료"
            resolve(data);
        },1000)
    });
}).then((d)=>{
    console.log(d)
})


//Promise 코드가 너무 복잡해서 등장한 async 함수
async function test(){
    let n=0;
    let d=null;
    //await Promise 의 .then() 함수를 실행후 첫번째 콜백함수의 매개변수를 반환
    n=await new Promise((resolve)=>{
        setTimeout(()=>{
            n++;
            resolve(n);
        },3000)
    });
    console.log("test()",n)
    d=await new Promise((resolve)=>{
        setTimeout(()=>{
            d="test() 완료";
            resolve(d);
        },1000)
    });
    console.log(d);

    let i=await setNum(10,6000);



    console.log(i)
    //fetch(url); <-Promise 화된 함수
    const res=await fetch("http://localhost:8080");
    const data=await res.json();
}
test();
//프로미스화 : 함수가 프라미스 객체를 반환

function setNum(num,time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            //....
            resolve(num)
        },time);
    })
}











