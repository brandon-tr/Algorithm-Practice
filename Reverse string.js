function reverse(string){
  var newStr = ''
  for (var i = 0; i < string.length; i++) {
    newStr += string[string.length-i-1];
    console.log(newStr)
  }
  return newStr
}
