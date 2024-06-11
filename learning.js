// // Comment
console.log("Hello World")
let firstName = 'Pablo';
const lastName = 'Vel'
console.log(firstName)
console.log(lastName)

// // type
console.log(typeof(firstName))

// functions
function greet() {
    console.log ("hi my name is")
    return firstName
}
console.log(greet())

// array
my_array = ['red', 'blue']
// if elif and else
if (my_array.length < 4) {
    console.log('small list')
} else if (my_array.length > 8) {
    console.log('big list')
} else {
    console.log('medium list')
}

// f-string
console.log(`${firstName} is so cool`)

// Objects
person = {
    'name' : 'pab',
    'age' : 18,
    'bio' : function greet() {
        console.log(`${this.name} is ${this.age} years old`)
    }
}
console.log(person['name'])
console.log(person.name)
console.log(person['bio'])
person.bio()

function Player (height) {
    this.height = height
    this.introduceSelf = function () {
        console.log(`Hi, I am ${height} inches tall`)
    }
}

// new Operator automatically creates object and allows
// you to use this in the function that creates the object
const kayla = new Player(66)
console.log(kayla.height)
kayla.introduceSelf()
console.log(Object.getPrototypeOf(kayla))

// Create proptery creates a new object with 'kayla' as the
// prototype therefore bro has the same properties as kayla
const bro = Object.create(kayla)
bro.introduceSelf()

// Classes
class Person {

    // Init function using keyword constructor
    constructor(identity) {
        this.identity = identity
    }

    // Method
    introSelf() {
        console.log(`My name is ${this.identity}`)
    }

}

// Creating an instance of a Class
const hoe = new Person('hoe')
hoe.introSelf()

// Making subclass of Person
class Professor extends Person {

    constructor(identity, teaches) {
        super(identity)
        this.teaches = teaches
    }

    introSelf() {
        console.log(`My name is ${this.identity} and I teach ${this.teaches}`)
    }
}

// Create an instance of Professor Class
const ho = new Professor('gilstrang', 'Linear Algebra')
ho.introSelf()

// async function and await keyword
async function populate() {
    const requestURL =
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroes = await response.json();

    populateHeader(superHeroes);
    populateHeroes(superHeroes);
  }
