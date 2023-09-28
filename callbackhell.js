//Js is  synchronous and  single threaded language that means it can do only one thing at a time in a specific order
// with Web API(setTimeout) and using Callbacks functions enable us to do asynchronous operations.
// setTimeout(function(){
//     console.log("timer")
// },5000)


function x(y){
    console.log("x called")
    y()
}

function y(){
    console.log("y called")
}
//x(y)

function attachEventlisteners(){
 let count =0;
 document.getElementById("click-me-btn").addEventListener("click",()=>{
    console.log("Button Clicked", ++count)
 })
}
//attachEventlisteners()
// garbage collection and remove event listeners
// the callbacks which are not in use needs to be removed, bcz they are heavy i.e. the callback function of event listener 
// make closure with the lexical scope and it occupies extra memory, so good practice to remove event listeners if not in use
// so as to free this occupied memory





//<---------- callback hell-------------->

// greet -> take order -> give food->  take payment -> thankyou

// {
//     function greet (takeorder){
//         console.log("Greetings!")
//         takeorder(giveFood)
//     }
    
//     function takeorder(giveFood){        
//         let order = prompt("Please give your order!")       
//         if(order){
//             console.log("Your order is: ",order)
//             giveFood(takePayment)
//         }
//         else{
//             thankYou();
//         }
//     }
    
//     function giveFood(takePayment){   
//        // alert("Giving FOOD.....")
//         console.log("Giving FOOD.....")
//         takePayment(thankYou)
//     }
    
//     function takePayment(thankYou){
//         var payment="success"
//         console.log("plz pay for your food")
//         if(payment=="success")
//         thankYou()
//     }
    
//     function thankYou(){
//         console.log("Thanks!")
//     }
    
//     greet(takeorder);
// }


// <-----------Promise Chaining------------->
function addition(n1,n2){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let sum=n1+n2
            console.log("Sum: ", sum)
            resolve(sum)
        },500)
    })
}

function subtraction(sum,n){
       return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                if(n>sum){
                   reject("plz enter number smaller than n1 and n2")
                }
                else{
                    let res= sum-n
                    console.log("Sub Result: ", res)
                    resolve(res)
                }              
        },500)
       })
}

function multiply(subVal,n){
    return new Promise((resolve,reject)=>{
        let res= subVal*n;
        if(n===0){
            reject("Entering 0 is not allowed...")
        } else{
            resolve(res)
            console.log("Multiply Result: ", res)
        }
    })
}

function handlePromiseChain(){
    addition(5,4).then((sum)=>{
        console.log(sum)
        return subtraction(sum,2)
    })
    .then((res)=>{
        return multiply(res,0)
    }) 
    // .then(res=>console.log(res))
    .catch(err=>{
        console.log("Error: ",err)
    })
}

//handlePromiseChain()

async function handlePromisesUsingAsyncAwait(){
    let data1 =  await addition(5,4);
    let data2 = await subtraction(data1, 2)
    let data3 = await multiply(data2, 3)
}

handlePromisesUsingAsyncAwait()