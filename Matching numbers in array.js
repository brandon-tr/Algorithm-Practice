function checkDuplicateNumbers(array){
  var newArr = [];
  array.sort();
  for (var i = 0; i < array.length; i++) {
    if(array[i] === array[i+1]){
      if(array[i] === newArr[newArr.length - 1]){
      }else{
        newArr.push(array[i])
      }
    }
  }
  return newArr
}

//Will push the duplicate into a new array called newArr

function hasDup(array){
  return (new Set(array)).size !== array.length)
}

//Will return true if a duplicate is found
