const arr =[6, 17 ,5 ,40 ,1]

function binary(x){
    return x.toString(2)
}

function double(){
    return x *2
}

// const output= arr.map(binary)
// console.log(output)

// the above thing can be achieved this way also
// const output1= arr.map(function binary(x){
//     return x.toString(2)
// })

// the other way:
// const output2= arr.map( (x)=>{
//     return x.toString(2)
// })

//another way
const output3= arr.map((x)=> x.toString(2))
console.log(output3)

//<----------filter method----------->
// const output4= arr.filter((x)=> x>4)
// console.log(output4)


//<----------reduce method----------->

// function findSum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return sum;
// }
// console.log(findSum(arr))


//find sum using reduce method
// const output4= arr.reduce((acc,curr)=> {
//     acc=acc+curr;
//     return acc;
// },0)
// console.log(output4)


//find max using reduce method
const output4= arr.reduce((max,curr)=> {
   // max>curr? max=max: max=curr;
   if(curr > max){
    max=curr;
   }
    return max;
},0)
console.log(output4)



