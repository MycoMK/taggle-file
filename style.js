


let age = 25;
let year = 2019;

console.log(age, year );

age = 30;

console.log(age);

const points = 100;

console.log(points);


// strings

console.log('hello, World');

let email = ('mcmycosh16@gmail.com');
console.log(email);

// string concatienation

let fastName = 'Brandon'
let lastName = 'Sanderson'
let fullName = fastName + ' ' + lastName;
console.log(fullName);


// gettingg charactoters

console.log(fullName[2]);

console.log(fullName.length);

console.log(fullName.toUpperCase());

let index = email.indexOf('@')
console.log(index)

const title = 'Best read of 2019';
const auther = 'Myco';
const likes = 200;

let result = ` The blog called ${title} by ${auther} has ${likes} likes`
console.log(result);


let score = '100'

score = Number(score)

console.log (score + 1);


LOOPS

FOR LOOPS

for(let i = 0; i < 5; i++ ) {
console.log('in loop:' , i)
}

console.log('loop finished')

const names = [ 'Shaoun', 'Mario', 'Luigi'];

for( let i = 0; i < names.length; i++ ){
    // console.log(names[i]);

    let html= `<div>${names[i]}</div>`
    console.log(html)
}



const age = 25;

if(age > 20){
    console.log("you are over 20 years old");
}

const password = "pas432f4";

if(password.length >= 12){
    console.log("this password is too strong")

} else if(password.length >= 8){

    console.log("that password is long enough");

} else {
    console.log("password is not long enough");
}


//  fuction declaration
function greet(){
    console.log("Hello there")
}

greet()
greet()
greet()


// function expression
const speak = function(){
    console.log("Good day")
};

speak()
speak()
speak()

const todo = function(name, time){
    console.log(`Good ${time} ${name}`)
};

todo("Myco", "Morning");

const todo = function(name = "Myco", time = "Nigth"){
    console.log(`Good ${time} ${name}`)
};

todo()

const greet = () => "Hello Word";
const result = greet();
console.log(result);


const todo = document.querySelectorAll("h1");

todo.forEach(todo =>{

    console.log(todo.innerText);
     todo.innerText += " Lets go boys"
});


const content = document.querySelector(".content");

const people = [ "Mario", "Luigi", "Yoshi"];


people.forEach(person => {

content.innerHTML +=  `<p>${person}</p>`;
});
