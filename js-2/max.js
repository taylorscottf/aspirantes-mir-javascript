// Definición de variable 

/*
function max(arr){

for(let i =0; i<arr.length;i++){
    if(max < arr[i]){
        max = arr[i]
}
}
return [max]
}


console.log(array(max([10, 9, 8, 7, 6, 5, 4]))) // 10
console.log(max([])) // undefined
*/
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  console.log(getMaxOfArray([10, 9, 8, 7, 6, 5, 4])) // 10