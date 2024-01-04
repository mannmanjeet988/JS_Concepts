console.log("hello")



// function invert_key_value(obj) {
//     const swappedObj = {};

//     for (const word in obj) {
//       swappedObj[obj[word]] = word;
//     }
//     return swappedObj;
//   }

//   const ans = invert_key_value({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" })
  
//   console.log(ans)

// x()

// const  x= function (){
//     console.log("x called")
// }

// a=10;
// console.log(a)
// let a

// let arr =[1, 2, 3 , 4,5 ]
// const output= arr.filter((x)=>x>3

// )
//console.log(output)

//console.log(typeof   typeof 1);


// function printA(printB){
//     setInterval(()=>{
//         console.log("A")
//         printB(printC)
//     },1000)
// }

function outer(){
    var a=10;
     function inner(){
        console.log(a)
    }
    a=100;
    console.log(a)
    return inner;
}
   
    
//outer()();
//outer();





