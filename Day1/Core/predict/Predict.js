//?========================== Problem 1:==============================

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output :  
console.log(randomCar) // Tesla
console.log(otherRandomCar)  // Mercedes

//?==================== Problem 2:===================================

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;    
//Predict the output
console.log(name);         //! False output = name is not defined : <--- name is not variable --->  
console.log(otherName);   // Elon

//?==================== Problem 3:===================================

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);  // 12345
console.log(hashedPassword); //! False output = undefined

//?==================== Problem 4:===================================

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers;//5
const [,,,,,,,,third] = numbers;//2
//Predict the output
console.log(first == second); //!False  first=2 and second=5
console.log(first == third); //True  first=2 and third=2

//?==================== Problem 5:===================================

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //value
console.log(secondKey);//secondKey: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);// 1   
console.log(willThisWork); //5

