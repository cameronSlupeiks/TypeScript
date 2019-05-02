// VARIABLE TYPES & DECLARATIONS \\

let isBeginner: boolean = true;
let total: number = 0;
let first_name: string = 'Cameron';
let sentence: string = `My name is ${first_name}`

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Cameron', 22]

enum Color {Red, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let variable: unknown = 10;

let anyType: any = 10;
anyType = true;
anyType = 'Cameron';

let multiType: number | boolean;
multiType = 22;
multiType = true; 

// TYPE ASSERTION \\
let message; 
message = 'abc';
let endsWithC = (<string>message).endsWith('c');

// FUNCTIONS \\
function add(num1: number, num2?: number) {
    if (num2) {return num1 + num2;}
    else      {return num1;}
}

add(5, 10);
add(5);  

let doLog = (message: any) => console.log(message);

// INTERFACES \\
interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Cameron',
    lastName: 'Slupeiks'
}

fullName(p);

// CLASSES & ACCESS MODIFIERS \\
class Employee {

    employeeName: string;

    constructor(name: string) {this.employeeName = name;}

    greet() {console.log(`Good Morning ${this.employeeName}`);}

}

let emp1 = new Employee('Cameron');
emp1.greet();

class Manager extends Employee {
   
    constructor(managerName: string) {super(managerName);}

    delegateWork() {console.log('Manager delegating tasks');}

}

let m1 = new Manager('Cam');
m1.delegateWork();
m1.greet();

