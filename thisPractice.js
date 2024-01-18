function x(){
    console.log(this)     // window object
}
x()

const student = {
    name:"Manjeet",
    printName: function(){
        console.log(this.name)
    }
}

const student_2 ={
    name:"Saksham"
}

student.printName()                     // Manjeet
student.printName.call(student_2)      // saksham

// Arrow functions do not provide their own this binding(It retains the value of the enclosing lexical context)
const student_3 = {
    name:"surbhi",
    x: ()=>{
        console.log(this)
    }
}
student_3.x();              // window object bcz student_3 is in global scope.

const student4 = {
    a: 20,
    x: function(){
        const y = ()=>{
            console.log(this)     // complete student4 object
        }
        y()
    }
}
student4.x();      

