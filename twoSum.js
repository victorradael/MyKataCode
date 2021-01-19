function twoSum(numbers, target) {
  const numbersIndex = [];

  numbers.forEach((numberOne) => {
    numbers.forEach((numberTwo) => {
      var sum = numberOne + numberTwo;

      if (sum === target) {
        var numberOneIndex = numbers.findIndex(
          (number) => number === numberOne
        );
        var numberTwoIndex = numbers.findIndex(
          (number, index) => number === numberTwo && index !== numberOneIndex
        );

        if (
          numberOneIndex !== numberTwoIndex &&
          numberOneIndex < numberTwoIndex
        ) {
          numbersIndex[0] = numberOneIndex;
          numbersIndex[1] = numberTwoIndex;
        }
      }
    });
  });

  return numbersIndex;
}

console.log(twoSum([1, 2, 3], 4)); // [0,2]
console.log(twoSum([1234, 5678, 9012], 14690)); // [1,2]
console.log(twoSum([2, 2, 3], 4)); // [0,1]
