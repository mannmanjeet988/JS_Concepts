// <-----------------Closure --------------->
// closure is a function bind together with its lexical environment
// a closure is the combination of a function bundled together(enclosed) with references to its surrounding state(lexical environment)
// in other words, closure gives you access to another function's scope from an inner function.
// in Js, closures are created everytime a function is created . at function creation time

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a)
//     }
//     y();
// }
// x();     // 7
// here function y is bind to the variables of x. that means it forms a closure and it has access to its lexical scope

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a)
//     }
//     return y;
// }
// var z= x(); 
// console.log(z)   
// output:
// ƒ y(){
//     console.log(a)
// }

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a)
//     }
//     a=100
//     return y;
// }
// var z= x(); 
// console.log(z) 
//z()      //100    // y function makes closure with its lexical scope i.e. it remembers reference to variable a here(not the value)


// function z(){
//     var b= 80
//     function y(){
//         var a =70;
//         function x(){
//             console.log(a, b)
//         }
//     x()
//     }
//     y()
// }
// z()

