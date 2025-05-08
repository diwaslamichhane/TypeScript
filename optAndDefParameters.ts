// Optional Parameters

function userInfo(name: string, age?: number){ // ?: optional parameter

}
userInfo("Diwas", 22);
userInfo("John");

// Default Parameters

function checkUser(name: string, age: number, gender: string = "Not Disclosed") { // = default parameter

}
checkUser("Diwas", 22, "male");
checkUser("John", 18); // gender will be "Not Disclosed" in output.
