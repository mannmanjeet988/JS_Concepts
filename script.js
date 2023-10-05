

// document.getElementById("add-btn").addEventListener("click",()=>{
//     let num1 = document.querySelector("#input1").value
//     console.log(num1)
//     let num2 = document.querySelector("#input2").value
    
//     let n1 = parseFloat(num1) 
//     let n2 = parseFloat(num2)
    
//     if (!isNaN(n1) && !isNaN(n2) ){
//         console.log(typeof n1, n2)
//         let res= n1 + n2;
//         console.log(res)
//         document.getElementById("result").textContent= res;

//     }
//     else{
//         console.log("invalid input")
//     }
// })

//<--------------Another approch------------------>

// document.getElementById("calculate").addEventListener("click", ()=>{
//     let operator = document.querySelector("#operator").value
//     let n1 = parseFloat(document.querySelector("#input1").value)
//     let n2 = parseFloat(document.querySelector("#input2").value)
//     var res
//     if(operator==="+"){
//          res= n1 + n2;
//         console.log(res)
//     }
//     if(operator==="-"){
//         res= n1 - n2;
//     }
//     if(operator==="*"){
//         res= n1 * n2;
//     }
//     if(operator==="/"){
//      res= n1 / n2;
//     }
//     document.getElementById("result").innerHTML=res;  
// })

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


// <----------------Generate timer----------------------->
// function getCurrenttime(){
//      const now = new Date()
//      //console.log(now)
//      const time = now.toLocaleString()
//      console.log(time)
//       return time;   
// }

// //const currtime= getCurrenttime()
// //document.getElementById("timeTag").textContent=` ${currtime}`

// // for(let i =0;i<5;i++){
// //    (setInterval(getCurrenttime,2000))
// // }
// let counter=0

// const intervalId = setInterval(function(){
//      getCurrenttime()
//    // document.getElementById("timeTag").textContent=` ${currtime}`    
//     counter++;
//     if(counter==5){
//         clearInterval(intervalId)
//     }
// }, 2000)

// <-------------------------->
// function ceaserCipher(str, shift){
//     let chars = str.split("")
//     console.log(chars)
//     for (let i =0; i<chars.length; i++){    
//         let charCode = chars[i].charCodeAt(0)
//         if(charCode>=65 && charCode<=90)
//         {
//             charCode = ((charCode-65 + shift)%26)+65
//         chars[i]=String.fromCharCode(charCode)
//         }
//         if(charCode>=97 && charCode<=122){
//             charCode = ((charCode-97 + shift)%26)+97
//             chars[i]=String.fromCharCode(charCode)
//         }
//     }
//     return chars.join("")
// }

// let str = ceaserCipher("abcde",5)
// console.log(str)


// <--------------Generate random Number--------->
//  function generateRandomNumber(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const randomNum = Math.floor(Math.random()*10)
//             resolve(randomNum)
//         }),1000
//     }) 
// }

// async function displayRandomNumber(){
//     const randomNumber= await generateRandomNumber();
//     console.log(randomNumber)
//     }

// displayRandomNumber();

// const ans =  generateRandomNumber()
// console.log(ans)

//<--------------delay log---------->
// function delayLog(str,delay){
//     setTimeout(()=>{
//         console.log(str)
//     },delay)
// }
// delayLog("Manjeet",1000)
// delayLog("Mann",2000)

//<----------Fetching data------------->
// fetch("https://dummyjson.com/products")
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
//     const productList = document.getElementById('product-list');
//      data.products.forEach((product)=>{
//         const li=document.createElement("li")
//         li.innerHTML=`${product.title} - $${product.price}`
//         productList.append(li)
//      })
// }).catch(error=>{
//     console.log(error)
// })

// function Person() {}
// Person.prototype.sayHi = function () {
// console.log("hi!");
// };
// let rahul = new Person();
// Person.prototype.sayHi = function () {
// console.log("Greetings!");
// };
// rahul.sayHi()

// class Animal {
//     constructor(name, age, sound) {
//     this.name = name;
//     this.age = age;
//     this.sound = sound;
//     }
//     makeSound() {
//     console.log( this.name + " makes "+ this.sound);
//     }
//     }

//     class Cat extends Animal {
//     constructor(name, age, sound, breed) {
//     super(name, age, sound);
//     this.breed = breed;
//     }
//     meow() {
//     console.log("meow");
//     }
//     }
//     const myCat = new Cat("jimmy", 3,"meow-meow", "cat");
//     console.log(myCat.name);
//     console.log(myCat.age);
//     //console.log(myCat.sound);
//     // console.log(myCat.breed);
//     myCat.makeSound();
//     // myCat.meow();

// function introducedAccio() {
//         return 'Hi, I am AccioJob!';
//         }
//         function completeTest(){
//             "Please complete your test";
//             console.log(introducedAccio.prototype)
//             const ans2= (completeTest.prototype); 
//             console.log(ans2);
//         }
//         const completeTest2= () =>{
//             "Please complete your test";
//             console.log(introducedAccio.prototype)
//             console.log(completeTest.prototype);           
//         }
//   completeTest()
//   completeTest2()        // same output for both 
        
    
