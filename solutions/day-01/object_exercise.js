/* const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki',
    },
    getPersonInfo: function () {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    },
  }
   */
//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty
  
/* const copyPerson = Object.assign({}, person)
console.log(copyPerson)

const keys = Object.keys(copyPerson)
console.log(keys) //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']

const values = Object.values(copyPerson)
console.log(values)
const entries = Object.entries(copyPerson)
console.log(entries)
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score')) */

// Exercise Level 1
const dog = {
    name: "Terra",
    legs: 4,
    color: 'Brown',
    age: 2,
    bark: function(){
        return "Woof Woof !";
    }
};

dog.breed = "Pitbull";
dog.getDogInfo = function() {
    let statement = this.name + " is a " + this.age + " years old " + this.color + " " + this.breed + " and has " + this.legs + " legs"
    return statement;
}

// console.log(dog.getDogInfo())


// Exercise Level 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
let mostSkills = users.Alex;
let loggedIn;
let enoughPoints;
let mernUser = [];

users.Rizal = {
    email: 'rizal@rizal.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Pyton'],
    age: 25,
    isLoggedIn: true,
    points: 40
}
function findMax(object) {
    let tempSkills = object['Alex'];
    let mostSkills;

    for(const user in object){
        if(object[user].skills.length >= tempSkills.skills.length){
            tempSkills = object[user];
            mostSkills = user;
        }
    }

    return mostSkills;
}

function countLoggedIn(object) {
    let loggedIn = 0;
    let mostPoint = 0;

    for(const user in object){
        if(object[user].isLoggedIn){
            loggedIn++;
        }
        if(object[user].points >= 50){
            mostPoint++;
        }
    }

    return [loggedIn, mostPoint];
}

function findMERN(object){
    let tempUsers = [];
    let mern = ['MongoDB', 'Express', 'React', 'Node'];
    for(const user in object){
        const exist = mern.every(value => {return object[user].skills.includes(value)})
        if(exist){
            tempUsers.push(user);
        }
    }

    return tempUsers;
}

[loggedIn, enoughPoints] = countLoggedIn(users);
mostSkills = findMax(users);
mernUser = findMERN(users);

const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]

function signUp(user, arrayOfUsers) {
    
}