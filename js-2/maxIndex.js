function maxIndex(my_array) {
    if (my_array.length === 0) { //longitud del array colección
        return -1;
    }
    else{
      var maximumValue = my_array[0];
      var maxIndex = 0;
 
      for (var i = 1; i < my_array.length; i++) {
          if (my_array[i] > maximumValue) {
              maximumValue = my_array[i];
              maxIndex = i;
              
          }
      }
      return maxIndex;
    }
}
/*Otra forma
function maxIndex(arr){

const max = Math.max(...arr);
const index = arr.indexOf(max);

return index
}
*/
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1