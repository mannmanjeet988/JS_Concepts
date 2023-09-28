// difference between function statement and function expression : it lies in hoisting

// a();     // a called
// b();     //TypeError: b is not a function

// Function statement ( it is also known as function declaration)
function a(){
    console.log("a called")
}


// function expression
var b= function(){
    console.log("b called")
}

a();     // a called
b();     // b called

//<-------- Named function expression---------->
// var b= function xyz(){
//     console.log("b called")
// }
// xyz()        // ReferenceError: xyz is not defined


// but if we use xyz inside function xyz(), it is allowed (as done below)
var b= function xyz(){
    console.log(xyz)
}
//xyz()   // ReferenceError: xyz is not defined
b()    
//output for b():---> 
//ƒ xyz(){
//   console.log(xyz)
// }

//<----------------difference between parameters and arguments---------->
// var b= function (param1,param2){       //here param1 and param2 are paramters
//     console.log(param1+param2)
// }
// b(1,2)                  // 1 and 2 here are arguments
// the values which we pass inside a function are called are called arguments and the identifiers or labels(e.g. param1,param2) which get
// these values(e.g. 1,2) are called parameters


// <------anonymous function----------->   its is a function without name
// function (){

// }
// anonymous function are used when function need to be used as values(i.e. assigining function to a variable as done in function expression)

// <------First class Functions-----------> 
// ability of function to be passed as values i.e assigned to variable, can be passed as arguments to other functions and can be returned
// from other function(either as named oranonymous function) is known as first class Function

function hello(){
    console.log("hello")
}
var c = function (param1){
        console.log(param1)    
    return function m(){      
        console.log("returned function")  
    }
}
//c(hello)   
// output : ƒ hello(){
//  console.log("hello")
//}

var a =c(hello)   
console.log(a)
// output : 
// ƒ m(){      
//     console.log("returned function")  
// }