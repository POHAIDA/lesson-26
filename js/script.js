//1 завдання
let car = {
    type: 'electric',
    wheels: 4,
}

let sportCar = {
    doors: 2
}
Object.setPrototypeOf(sportCar,car);

let pasangerCar = {
    doors: 4
}
Object.setPrototypeOf(pasangerCar,car)

let toyCar = {
    type: 'toy'
}
Object.setPrototypeOf(toyCar,sportCar)
console.log(car.type)

// 2 завдання

let employees = {
    wallet: {},
    pay(munth, sum){
        this.wallet[munth] = sum;
    }
}

let frontendDeveloper = {
    name: 'Mike',
}
Object.setPrototypeOf(frontendDeveloper,employees)
frontendDeveloper.wallet = {}

let backendDeveloper = {
    name: 'Bob'
}
Object.setPrototypeOf(backendDeveloper,employees);
backendDeveloper.pay('june',1500);
frontendDeveloper.pay('june',1700)

console.log(backendDeveloper.wallet.june);
console.log(frontendDeveloper.wallet.june);

// 3 завдання

function User(name,age){
    this.name = name;
    this.age = age;
}
let user_1 = new User('Mike',18);
console.log(user_1.constructor === User)
let user_2 = new user_1.constructor('Bob',29)
console.log(user_1)
console.log(user_2)

// 4 Завдання

function Usertype(name){
    for(let i = 0;i < name.length;i++){
        this[i] = name[i];
        if(i + 1 == name.length){
            Object.defineProperty(this,'length',{
                enumerable:true,
                writable: false,
                configurable: false,
                value: i + 1,
            });
        }
    }
}

let admins = new Usertype(['Mike','Bob','Nikola']);
admins.join = Array.prototype.join;
console.log(admins.join('; '))


