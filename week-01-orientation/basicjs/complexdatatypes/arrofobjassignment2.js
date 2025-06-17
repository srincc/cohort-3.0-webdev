function returnEighteen(user){
    for(let i = 0; i < user.length ; i++){
        if(user[i].age >= 18 && user[i].gender == "male"){
            console.log(user[i].name)
        }
    }
}



const users = [{
    name: "Harkirat",
    gender: "male",
    age: 21
}, {
    name: "raman",
    gender: "male",
    age: 22
}]

returnEighteen(users)