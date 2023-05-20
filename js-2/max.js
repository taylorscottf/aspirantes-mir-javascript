function max(arr){

for(let i =0; i<arr.length;i++){
    if(max < arr[i]){
        max = arr[i]
}
}
return [max]
}


console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined

