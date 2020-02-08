//comparing if one Array is the same as the other but squared

function comp  (array1, array2) {
    if (!array1 || !array2 || array1.length !== array2.length) {
        return false;
    }
    const sqrt = element => Math.sqrt(element);
    const arr2 = array2.map(sqrt).sort().toString();
    const arr1 = array1.sort().toString();
    
    return arr2 === arr1;
}

const arr1 = [121, 144, 19, 161, 19, 144, 19, 11]
const arr2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

console.log(comp(arr1, arr2))