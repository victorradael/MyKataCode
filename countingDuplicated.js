// Count the number of Duplicates
// Write a function that will return the count of distinct 
// case-insensitive alphabetic characters and numeric digits 
// that occur more than once in the input string. The input 
// string can be assumed to contain only alphabets (both 
//     uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
    const analysisText = text.toLowerCase().split('');

    var rep = analysisText.filter((letter, position) => {
        return text.indexOf(letter) !== position;
    });
    console.log(rep)

    const count = rep.filter((item, pos) => {
        return rep.indexOf(item) == pos;
    }).length

    return count
};

const text = "AMJSDFHGUjkasfnsdfaajdsuhfgvnrgf"
console.log(duplicateCount(text))

// Resolved CODE WARS