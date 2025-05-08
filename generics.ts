// Generics allow you to create components (like functions, classes, interfaces) that work with any data type, but still enforce type safety.

function user <T> (value: T){

}
user<string>("Diwas");
user<number>(22);
user<boolean>(true);