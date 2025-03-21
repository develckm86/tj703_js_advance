function sum(a,b){
    return a + b;
}
let num=10;
//export 한 메소드와 변수는 다른 js 문서에서 import 해서 사용가능

//export {sum,num};
export default sum;