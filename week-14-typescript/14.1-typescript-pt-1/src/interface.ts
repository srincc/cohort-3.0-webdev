interface UserAge {
    firstName : string,
    age : number
}

function isLegal(user : UserAge){
    if (user.age >= 18){
        console.log("legal to vote")
    }else{
        console.log("illegal")
    }
}

let user1 : UserAge = {
    firstName : "Shriyansh",
    age : 18
}

isLegal(user1)