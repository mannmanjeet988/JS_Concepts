//<-------hoisting ----->

// console.log(x);
// console.log(getName)
// getName()
// //getName2()   // output : TypeError: getName2 is not a function

// var x=10;

// function getName(){
//       console.log("Name Function called")
// }

// var getName2 = function getname2(){
//     console.log("Name 2 Function called")
// }

// getName2()   // output : Name 2 Function called

//outputs:
// undefined

// ƒ getName(){
//     console.log("Name Function")
// }

// Name Function called

//Name 2 Function called

// when jS code runs,Even before starting execution of code, memory is allocated to variables and functions 
//bcz just before exceution,global execution context is  created , Js just comes 
//through the program and  in the first phase ( creation phase)
//of exceution,memory is allocated to each and every variable and function and undefined is reserved for the variables
// and in case of functons,complete code is put (in scope)


// <-------How functions work in JS  ----->
// var x=1;
// a()
// b()
// console.log(x)

// function a(){
//     var x= 10;
//     console.log(x)
// }

// function b(){
//     var x= 100;
//     console.log(x)
// }



// <----JS is  a loosely typed language(weakly typed language)--->
//that means any variable initialized with a data type can be re initialized with another data type 
// as done in exampe below

// var n;
// console.log(n)
// n=100;
// console.log(n)
// n="manjeet"
// console.log(n)


// <-------Scope Chain  ----->
//Scope means where a variable and function can be accessed in the code
//Lexical environment :
//Whenever JS code runs, an execution context is created, a lexical environment is also created. 
//Lexical  environment is the local memory along with lexical environment of its parent. Lexical meaning in hierarchy (in order) 
//The whole chain of all the lexical environment and the parent references is scope chain(in simple terms, way of finding variables) 
//Here c is enclosed inside a, so a is lexical environment of c and global is the lexical environment of a. This complete we call scope chain
// function a(){
//    var b= 20; 
//    c()
//     function c(){
//         console.log(b)   //here output : 20
// }
// }
// a()
//console.log(b)   //ReferenceError: b is not defined


//// <-------Temporal Dead Zone  ----->
//Temporal dead zone is the time since when this let variable was hoisted and till it was initailized with some value
// so whenever we try to access any variable inside temporal dead zone, it gives error
// console.log(b)     //undefined
// var b= 110; 

// console.log(a)      // ReferenceError: Cannot access 'a' before initialization
// let a =70;

//const b;      //SyntaxError: Missing initializer in const declaration
 // it is syntax error bcz as per syntax it is expected const variable must be declared and initialized in same line

// const z=120;
// z=140;          //TypeError: Assignment to constant variable. 
// in case of const, not possible to re assign value, it is related to const(type), so type error

// let y=50;
// let y=70   //SyntaxError: Identifier 'y' has already been declared

//in case of declaration, let is more strict than var and const is even more strict than let.
// let and const are hoisted in a separate memory space 

//<-------Block scope and shadowing in Js -------------->
// block is defined by curly braces. it is also known as compound statement as in a block, multiple statements are grouped in a blcok
// block scope means what all variables and functions can be accesssed inside block 
// var m = 175;
// let n= 125;
// const p = 135;
// {
//     var m = 75;
//     let n= 25;
//     const p = 35; 
//     console.log(m)                  //75
//     console.log(n)                  //25   //n is in block scope
//     console.log(p)                  //35    //p is in block scope
// }
//     console.log(m)                  //75   (Important to Note)
//     console.log(n)                  //125    // here n is in global scope
//     console.log(p)                  //135    // here p is in  global scope


// var a= 28;
// {
//     let a=128;
// }
// console.log(a)     //28

// let a= 28;
// {
//     var a=128;
// }
// console.log(a)     //SyntaxError: Identifier 'a' has already been declared(bcz let here is in global scope and var always has global scope)

// let a= 28;
// function x(){
//     var a=128;     // no error bcz var is not crossing its boundary, here it is inside function scope and not interfering with let a
// }
// console.log(a)    //28

// const m =20;
// {
//     const m =98;
//     {
//         const m =158;
//         console.log(m)       //158 , a will access value from nearest a
//     }   
//     console.log(m)       //98
// }
// console.log(m)        //20

//  ---->Lexical scope works the same way inside block scope also 
// thees scope rules are same for arrow functions, no need to learn separaretly

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

