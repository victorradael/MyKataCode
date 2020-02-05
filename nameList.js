
// this code selects the name within 
// each item of the object and reorganizes 
// it within a string.

function list(names){
    return names.map(item =>{ return item.name; })
                            .join(", ")
                            .replace(/,(?!.*,)/gmi, " &");
  }

const namesList = [{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]

console.log(list(namesList))