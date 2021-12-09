//objects 


const book  ={
    title:'book one',
    author:'john doe',
    year:'2014',
    name:'javascripts',
    language:'high label'
    ,
    details:function(){
        return `${this.title} is written by ${this.author} in ${this.year} and its name is
         ${this.name} and its is ${this.language} language`
    }
};
console.log(book);
console.log("values of object",Object.values(book));
console.log("keys value of object",Object.keys(book));
console.log("its return value:",book.details());

//Largest Number

var array = [4,5,6,7,9.15,30];
const largestno = (values)=>{
    let max = 0;
    for(let i=0; i<array.length;i++){
        if(values[i]>max){
            max = values[i];
        }
    }
    return max;
}
console.log(largestno(array));

//square of an array 

function square(ar1){
    var ar1 = [4,2,4,7,8,9];
    for(let i=0; i<ar1.length;i++){
        console.log (ar1[i]*ar1[i]);
    }
    };
    square();

