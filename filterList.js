function filter_list(l) {
    function onlyNumbers(element) {
        //  console.log(typeof element)
        if (typeof element === 'number') {
            console.log(element)
            return element.toString()
        }
    }

    var onlyN = l.filter(onlyNumbers)
    console.log(onlyN[3])
    return onlyN
}

var array = ['a', 'b', 5, 7, 9, 0, 't', 'r', 7, 'e', 0]

console.log(filter_list(array))

