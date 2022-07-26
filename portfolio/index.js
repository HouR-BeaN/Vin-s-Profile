let celsius = 26;
let farenheit = celsius * 1.8 + 32;

console.log(farenheit);

let cash = 100;
let price = 69;
let exchange = cash - price;
let owe = price - cash;

if (cash > price) {
  console.log(`you paid extra - here\' ${exchange} dollars change`);
} else if (cash === price) {
  console.log("you paid exact amount, have a nice day");
} else {
  console.log(`not enough money - you still owe ${owe} dollars`);
}

let count = 0;

while (count < 10) {
  console.log(count);
  count = count + 1;
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      console.log("frontend simplified");
    } else {
      console.log("frontend");
    }
  } else if (i % 5 == 0) {
    console.log("simplified");
  } else {
    console.log(i);
  }
}

const str = "Frontend Simplified";

for (word in str) {
  console.log(str[word]);
}
//function definition
function iwelkamAngFerson(name) {
  console.log(`Welcome to Philippines, ${name}`);
}

//call the function
iwelkamAngFerson("Arvin");

function celsiusToFarenheit(celsius) {
  return celsius * 1.8 + 32;
}

const farenheitToCelsius = (farenheit) => {
  return (farenheit - 32) / 1.8;
};

console.log(celsiusToFarenheit(20));
console.log(farenheitToCelsius(68));

let arr = [20, 30, 40, 50, 100];

let lastItem = arr[arr.length - 1];

console.log(lastItem);

//add element to end of an array
arr.push(200);

console.log(arr);

let grades = ['A+', 'A', 'FAIL'];

let newGrades = grades.filter(element => element !== 'FAIL');

console.log(newGrades);

let goodGrades = [];

for (grade in grades) {
    if (grades[grade] !== 'FAIL') {
        goodGrades.push(grades[grade]);
    }
}

console.log(goodGrades);

//map method
let dollars = [1,5,31];

let newDollars = dollars.map(element => element * 100);

console.log(newDollars);

let users = [
    {
        username: 'arvin',
        email: 'arvin@gmail.com',
        password: 'test123',
        suhscriptionStatus: 'VIP',
        discordId: 'arvin arvin#001',
        lessonCompleted: [0,1,2],
    },
    {
        username: 'red',
        email: 'redn@gmail.com',
        password: 'test456',
        suhscriptionStatus: 'VIP',
        discordId: 'red red#110',
        lessonCompleted: [0,1,2],
    }
]

console.log(users[0].username);

function login(email, password) {
    for (user in users) {
        if (users[user].email == email) {
            if (users[user].password == password) {
                console.log('log the user in - the password is correct')
        }else {
            console.log('the password is incorrect - try again');

        }
        return;
    }
}
console.log('could not find an email that matches');
}

login('arvin@gmail.com', 'test123');

function register(username, email, password, suhscriptionStatus, discordId, lessonCompleted) {
    let user = {
        username: username,
        email: email,
        password: password,
        suhscriptionStatus: suhscriptionStatus,
        discordId: discordId,
        lessonCompleted: lessonCompleted,
    };
    users.push(user);
    console.log(user);
}

register('zainne', 'zainne@gmail.com', 'zainne123', 'VIP', 'zainne zainne#0101', [0,1,2,3,4]);

console.log(users);