const radius = [3,1,2,4]

const calculateArea = function (radius){
    const output=[]
    for(let i =0; i<radius.length;i++){
        output.push((Math.PI * radius[i] *radius[i]).toFixed(2))
    }
    return output;
}

const calculateCircumference = function (radius){
    const output=[]
    for(let i =0; i<radius.length;i++){
        output.push((2*Math.PI*radius[i]).toFixed(2))
    }
    return output;
}

const calculateDiameter = function (radius){
    const output=[]
    for(let i =0; i<radius.length;i++){
        output.push((2 * radius[i]).toFixed(2))
    }
    return output;
}

console.log(calculateArea(radius))

//<------Rewriting above functions in more concise way------>
 const arr1 = [3,1,2,4]

const area = function(radius){
    return (Math.PI * radius *radius).toFixed(2)
}

const circumference = function(radius){
    return (2* Math.PI *radius).toFixed(2)
}

const diameter = function(radius){
    return (2 * radius).toFixed(2)
}

const calculate = function(arr1,logic){
    const output=[]
    for(let i =0; i<arr1.length; i++){
        output.push(logic(arr1[i]))
    }
    return output;
}

console.log(calculate(radius,area))
// if 