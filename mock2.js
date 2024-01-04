


let b=10;
//console.log(b)

var a=10;
//console.log(a)


let arr=[1,11,4,6,9]
//console.log(arr)
//arr.sort((a,b)=>(a.localeCompare(b)))
arr.sort((a,b)=>(a-b))
//console.log(arr)

let arr2=["mango","banana","cherry"]
//arr2.sort((a,b)=>(a.localeCompare(b)))
arr2.sort((a,b)=>(a-b))
//console.log(arr2)

let obj1={
    names:["mango","banana","cherry"]
}

obj1.names.sort((a,b)=> a.localeCompare(b))
// obj2.append(obj1.names)

//let obj2=obj1.names.sort()
//console.log(obj1)

let numArr=[2,4,6,8,10];
let ans=numArr.reduce((acc,curr)=>{
    acc=acc+curr;
    console.log(acc)
    return acc
})
console.log(ans)

