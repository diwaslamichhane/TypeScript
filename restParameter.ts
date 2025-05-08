// Rest parameter [...]
// The rest operator (...) allows you to gather multiple values into a single array.
// It's used in functions to accept any number of arguments as a single array.

function numbers(...arr: number[]){
    console.log(arr);
}
numbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 