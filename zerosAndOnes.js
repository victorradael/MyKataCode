/*This code has the function of transforming a binary Array into an integer*/ 

const binaryArrayToNumber = arr => {
  var number = 0
  for(let i =0; i < arr.length; i++) {
    if(arr[i] == 1) {
      var expo = (arr.length-1)-i
      number += Math.pow(2,expo)
    }
  }
   return number
};

//Testes 
console.log(binaryArrayToNumber([0,0,0,1])) //1
console.log(binaryArrayToNumber([0,0,1,0])) //2
console.log(binaryArrayToNumber([1,1,1,1])) //15
console.log(binaryArrayToNumber([0,1,1,0])) //6


 