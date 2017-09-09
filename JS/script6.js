//functions

function calculateAge(YearofBirth){
    var age = 2017 - YearofBirth;
    return age;
}

var john = calculateAge(1997);
console.log(john)

function yearsUntillRetirement(name,year){
    var age = calculateAge(year);
    var ret = 65 - age;
    console.log(ret)
}

yearsUntillRetirement('john',1990)