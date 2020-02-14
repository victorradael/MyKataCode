// Complete the function that accepts a string parameter, 
// and reverses each word in the string. All spaces in the 
// string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let arrStr = str.split(' ');
    console.log(arrStr)
    let reverseArrStr = arrStr.map(a => a.split('').reverse().join(''));
    return reverseArrStr.join(' ');
}

// Solved CODE WARS 02/14/20