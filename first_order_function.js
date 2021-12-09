

const foo=function(){
    console.log("foobar")
}
foo();


function returnHello(){
    return "Hello,";
}
 function greeting(helloMessage,name){
     console.log(helloMessage(),name);
 }
 greeting(returnHello,"adarsh");

function hey(){
    return "how are you ?";
}
function answer(firstFunction,reply){
    console.log(firstFunction()+reply);
}
answer(hey,"fine");


function sayHello(){
    return function(){
        console.log("hello!");
    }
}
sayHello()();


const Hello =function(){
    return function(){
        console.log("hello");
    }
}
const myfunc =Hello();

myfunc();
