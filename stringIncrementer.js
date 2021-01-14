// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.
function pad(number, length, filler) {
  number = number + "";
  if (number.length < length) {
    for (var i = number.length; i < length; i += 1) {
      number = filler + number;
    }
  }

  return number;
}

function incrementString(strng) {
  var number = strng.match(/\d+$/);

  if (number != null) {
    number = pad(parseInt(number[0]) + 1, number[0].length, "0");
    strng = strng.replace(/\d+$/, number);
    return strng;
  }

  return strng + "1";
}

console.log(incrementString("foo0099"));
