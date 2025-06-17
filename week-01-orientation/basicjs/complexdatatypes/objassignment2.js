function genderGreet(user){
    if (user.gender = "male" && user.age >= 18){
        console.log("hi Mr " + user.name + " your age is " + user.age + " so you are eligible to vote" )
    }

    else if (user.gender = "male" && user.age < 18){
        console.log("hi Mr " + user.name + " your age is " + user.age + " so you are not eligible to vote" )
    }

    else if(user.gender = "female" && user.age >= 18){
        console.log("hi Mrs " + user.name + " your age is " + user.age + " so you are eligible to vote")
    }

    else if (user.gender = "female" && user.age < 18){
        console.log("hi Mr " + user.name + " your age is " + user.age + " so you are not eligible to vote" )
    }

    else if (user.gender = "others" && user.age >= 18) {
        console.log("hi others " + user.name + " your age is " + user.age + " so you are eligible to vote")
    }
    
    else if (user.gender = "others" && user.age < 18){
        console.log("hi others " + user.name + " your age is " + user.age + " so you are not eligible to vote")
    }
}

let user = {
    name : "shriyansh",
    age : 19,
    gender : "male"
}

genderGreet(user)