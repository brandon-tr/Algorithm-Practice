function insertAt(array,num,indx){
  array.length += 1
  for (var i = array.length - 1; i >= indx; i--) {
  array[i] = array[i-1]
  }
  array[indx] = num
  return array
}



insertAt([1,2,3,4,5],7,0)
