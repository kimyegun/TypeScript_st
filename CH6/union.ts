//or 연산자의 | 을 이용하여 여러 개의 타입중 1개만 사용
function logText(text: string | number) {
    console.log(text)
}

logText('hi');
logText(100);

interface Person {
    name: string;
    age: number;
}

interface Developer {
    name: string;
    skill: number;
}

function introduce(someone: Developer | Person) {
    if('age' in someone) {
    console.log(someone.age);
    return;
}
    if('skill' in someone) {
        console.log(someone.skill);
        return;
    }
}

introduce({ skill:'인프런 강의', name:'캡틴'});

function logText(text: string | number) {
    if (typeof text === 'string') {
        console.log(text.toUpperCase());
    }
    if (typeof text === 'number') {
        console.log(text.toLocaleString());
    }
}

