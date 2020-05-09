// A string is considered to be in title case if each word in the 
// string is either (a) capitalised (that is, only the first letter 
// of the word is in upper case) or (b) considered to be an exception 
// and put entirely into lower case unless it is the first word, which 
// is always capitalised.

// Write a function that will convert a string into title case, given an 
// optional list of exceptions (minor words). The list of minor words will 
// be given as a string with each word separated by a space. Your function 
// should ignore the case of the minor words string -- it should behave in 
// the same way even if the case of the minor word string is changed.

// ###Arguments (Haskell)

// First argument: space-delimited list of minor words that must always be 
// lowercase except for the first word in the string.
// Second argument: the original string to be converted.

// ###Arguments (Other languages)

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words 
// that must always be lowercase except for the first word in the 
// string. The JavaScript/CoffeeScript tests will pass undefined when 
// this argument is unused.

function titleCase(title, minorWords) {
    
    var formattedTitle = [];

    function firstCapital(specialWord) {
        specialWord = specialWord.split('');
        specialWord[0] = specialWord[0].toUpperCase();
        specialWord = specialWord.join('');
        return specialWord
    }

    if (minorWords) {
        minorWords = minorWords.toLowerCase();
    }
    else {
        minorWords = "";
    }

    title = title.toLowerCase().split(" ");
    
    title.forEach((word, index) => {
        if (index===0) {
            formattedTitle.push(firstCapital(word));
        }
        else if (minorWords.indexOf(word) !== -1) {
            formattedTitle.push(word);
        }
        else {
            formattedTitle.push(firstCapital(word));
        }
    })
    const ready = formattedTitle.join(" ");
    return ready
}

// this code solves this problem in VSCode, but I don't know 
// what happens in the CODE WARS compiler that gives a problem 
// with toUpperCase (), saying that it is not defined.