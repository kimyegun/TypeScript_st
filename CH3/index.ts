var nam : string = 'captain'; //문자열 타입
let age : number = 100; // 숫자타입
let isLogin : boolean = false; // 진위 타입
let hero : object = {name: 'captain', age:100}; //객체 타입

//문자열 배열
let companies: Array<String>=['네이버','삼성','인프런'];
let companies1: string[] = ['네이버','삼성','인프런'];
//숫자 배열
let cards: Array<number> = [13,7,2,4];
let cards1 : number[]=[13,7,2,4];

let items : [string, number] = ['hi',11]; // 튜플타입


//any 타입
let myName : any = '캡틴';
myName = 100;
let age1: any = 21;

//null과 undefined
let empty: null = null;
let nothingAssigned: undefined;

function sayWord(word: string) : string {
    return word;
}

sayWord("hi","123"); 


//옵셔널 파라미터
function sayMyname(firstName: string, lastName?:string) :string{
    return 'my name : ' + firstName + ' ' + lastName;
}
sayMyname('Captain');