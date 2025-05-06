// An intersection combines multiple types into one using the `&` operator.

type user = {
    name: string;
    userID: number;
}

type admin = user & {  // We combined the user type with the admin type
    isAdmin: boolean;
    adminID: number;
}


function getInfo(a: admin){
    console.log(a.name);
    console.log(a.userID);
    console.log(a.isAdmin);
    console.log(a.adminID);
}
getInfo({name:"Diwas", userID: 1, isAdmin: true, adminID: 2});