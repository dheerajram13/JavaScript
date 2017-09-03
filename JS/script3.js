//if else

var name = "dheeraj";
var age = "19";
var isStudent = "yes";

if(isStudent === "yes"){    // === it does not perform type coercion and it is safer to use.
    console.log(name + "is a student.");
}else{
    console.log(name+"is not a student.")
}


var isDeveloper = true;

if(isDeveloper){
    console.log(name+" is a Developer.");
}
else{
    console.log(name+" is not a Developer.")
}

if(23=="23"){     // it performs type coercion.
    console.log("true");
}