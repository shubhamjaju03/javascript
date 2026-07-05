arr = [1, 2, 3, 4, 5] //array is a collection of elements
arr.push(6) //push() method adds one or more elements to the end of an array and returns the new length of the array
console.log(arr) //it will print the array with the new element added at the end    
for (let i = 0; i < arr.length; i++) { //for loop is used to iterate over the elements of an array
    console.log(arr[i]) //it will print the elements of the array one by one
}
arr.pop() //pop() method removes the last element from an array and returns that element
console.log(arr) //it will print the array with the last element removed
arr.shift() //shift() method removes the first element from an array and returns that element
console.log(arr) //it will print the array with the first element removed
arr.unshift(0) //unshift() method adds one or more elements to the beginning of an array and returns the new length of the array
console.log(arr) //it will print the array with the new element added at the beginning
arr.splice(2, 1) //splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
arr.splice(2, 0, 2.5) //it will add 2.5 at index 2 without removing any element
console.log(arr) //it will print the array with the new element added at index 2
arr.splice(2, 1, 2.5) //it will replace the element at index 2 with 2.5
console.log(arr) //it will print the array with the element at index 2 replaced with 2.5
