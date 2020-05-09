//this code inverts a writing order of a sequence ex.: end -> dne
function strInverter (string) {
    var inverse = string.split('').reverse().join('')
    return inverse
}

console.log(strInverter('Victor'))
