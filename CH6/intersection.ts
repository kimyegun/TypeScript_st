
interface Avenger {
    name: string;
}

interface Hero {
    skill: string;
}

function introduce(someone: Avenger & Hero) {
    console.log(someone.name);
    console.log(someone.skill);
}

introduce({name:'캡틴', skill:'어셈블'});

