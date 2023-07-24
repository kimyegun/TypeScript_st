

interface User {
    name: string;
    age: number;
}

let seho: User = {name:'세호', age: 36};

let seho1: User = {name:'세호', age: "36"};
let seho2: User = {name:'세호', age: 36, hobby: '와인'};


interface Person {
    name?: string;
    age: number;
}

function logAge(someone:Person) {
    console.log(someone.age);
}

function logPersonInfo(you:Person) {
    console.log(you.name);
    console.log(you.age);
}

let captain = {age:100};
logAge(captain); //100

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    logAge() {
        console.log(this.age);
    }
}

class Developer extends Person {
    constructor(name, age, skill) {
        super(name, age);
        this.skill = skill;
    }

    logDeveloperInfo() {
        this.logAge();
        console.log(this.name);
        console.log(this.skill);
    }
}


interface User {
    [property: string]: string
    id: string;
    name: string;
}

let seho0: User = {
    id:"1",
    name: "세호",
};
