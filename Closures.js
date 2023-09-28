// <-----------------Closure --------------->
// closure is a function bind together with its lexical environment
// a closure is the combination of a function bundled together(enclosed) with references to its surrounding state(lexical environment)
// in other words, closure gives you access to another function's scope from an inner function.
// in Js, closures are created everytime a function is created . at function creation time

function x(){
    var a = 7;
    function y(){
        console.log(a)
    }
    y();
}
x();
// here function y is bind to the variables of x. that means it forms a closure and it has access yo its lexical scope
