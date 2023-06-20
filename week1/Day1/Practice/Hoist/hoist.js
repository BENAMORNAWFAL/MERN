GIVEN
console.log(example); //? undefined
var example = "I'm the example!";
//AFTER HOISTING BY THE INTERPRETER
var example;
console.log(example); //? undefined            False output=I'm the example!
example = "I'm the example!";

//! Given 1:
console.log(hello);    //? undefined                               
var hello = 'world';                                 

//! Given 2:
var needle = 'haystack';
test();
function test(){ 
    var needle = 'magnet';
    console.log(needle); //? magnet  
}

//! Given 3:
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan); //? nothing
}
console.log(brendan); //? super cool



//! Given 4:
var food = 'chicken';
console.log(food);  //? chicken
eat();   
function eat(){
    food = 'half-chicken';
    console.log(food);    //? half-chicken
    var food = 'gone';
}


//! Given 5:
mean();                                //? False output=mean is not a function
console.log(food); //?undefined
var mean = function() {
    food = "chicken";
    console.log(food); //?chiken
    var food = "fish";
    console.log(food); //?fish
}
console.log(food); //? fish


//! Given 6:
console.log(genre); //? genre is not defined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); // ?rock
    var genre = "r&b";
    console.log(genre); //? r&b
}
console.log(genre); //? r&b       False output= disco

//! Given 7:
dojo = "san jose";
console.log(dojo);  //? san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);   //? seattle
    var dojo = "burbank";
    console.log(dojo);  //?  burbank
}
console.log(dojo);  //? san jose

//! Given 8:
console.log(makeDojo("Chicago", 65));  //?  {name:'Chicago' , students:65 , hiring: true}
console.log(makeDojo("Berkeley", 0));  //?  closed for now                                        False output=error   
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
