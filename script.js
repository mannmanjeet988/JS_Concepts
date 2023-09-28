console.log("hi")



document.getElementById("add-btn").addEventListener("click",()=>{
    let num1 = document.querySelector("#input1").value
    console.log(num1)
    let num2 = document.querySelector("#input2").value
    
    let n1 = parseFloat(num1) 
    let n2 = parseFloat(num2)
    
    if (!isNaN(n1) && !isNaN(n2) ){
        console.log(typeof n1, n1)
        let res= n1 + n2;
        console.log(res)
        document.getElementById("result").textContent= res;

    }
    else{
        console.log("invalid input")
    }
})


// let counter1=0;
// let counter2=0;
// document.getElementById("result1").textContent = counter1
// document.getElementById("result2").textContent = counter2

// function checkWinner(){
//     if(counter1>=10){
//         document.getElementById("count1-btn").disabled = true;
//         document.getElementById("count2-btn").disabled = true;
//         alert("Player A Wins")  
//     }
//     if(counter2>=10){
//         document.getElementById("count1-btn").disabled = true;
//         document.getElementById("count2-btn").disabled = true;
//         alert("Player B Wins")  
//     }
// }

// document.getElementById("count1-btn").addEventListener("click",()=>{
//     counter1++;
//     document.getElementById("result1").textContent = counter1; 
//     checkWinner();
    
// })
    
    

// document.getElementById("count2-btn").addEventListener("click",()=>{
//     counter2++;
    
//     checkWinner()
//     document.getElementById("result2").textContent = counter2; 
    
// })

// document.getElementById("reset-btn").addEventListener("click",()=>{
//     document.getElementById("count1-btn").disabled = false;
//     document.getElementById("count2-btn").disabled = false;
//     counter1=0; counter2 = 0
//     document.getElementById("result1").textContent = 0;
// document.getElementById("result2").textContent = 0;
// // document.getElementById("result1").textContent = counter1; 
// // document.getElementById("result2").textContent = counter2; 
// })


