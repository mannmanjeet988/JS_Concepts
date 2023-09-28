// callback hell

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


// Promise Chaining
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