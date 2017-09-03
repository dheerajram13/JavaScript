//boolean logic and switch statements     
/*
 AND - && if all are true.
 OR  - || if one is true.
 NOT - !  

*/
var name = "Dheeraj";
var input =  prompt("Enter your age:");
if(input>=3 && input <=10){
    alert("You are a kid!")
}
else if(input<=16 && input>=11){
    alert("You are a teenager!");
    console.log("You are a teenager!");
}
else if(input >= 17 && input <= 25){
    alert("You are Youth!");
    console.log("You are Youth!");
}
else if (input>25 && input<=40){
    alert("you are a man");
}
else if(input>40){
    alert("Your are a old man!");
}

else{
    alert("Opps! try Again")
    console.log("Opps! try Again");
}

var occupation = prompt("Enter your occupation");
switch(occupation){
    case 'student':
        console.log("You are a Student.");
        break;
    case 'driver':
        console.log("You are a driver.");
        break;
    default:
        console.log("other");   
}

