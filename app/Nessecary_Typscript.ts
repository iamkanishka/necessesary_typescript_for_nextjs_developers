
//STRING
//String Variable with implicit Type assignment
let variable = "Hello";
// string Varibles should be assigned with string only;
variable = "Gangter";

//String Variable with Explicit  Type assignment
let variablewithType: string = "kanishka";

//NUMBER
// Number Variable with implicit Type assignment
let age = 18;

// Number Variable with Explicit Type assignment
let ageiwithType: number = 18;

// ageiwithType ="Eighteen"; cannot assign string to number type
ageiwithType = 18;


//BOOLEAN
// Boolean Variable with implicit Type assignment
let testBoolean = false;

// Boolean Variable with Explicit Type assignment
let testBooleanwithType: boolean = false;


//UNION TYPES
let testStringornumber: string | number  //  we can assign two types to a varaible by the concept of Union types
// testStringornumber only can assigned with  string or number value 
testStringornumber = 20;
testStringornumber = "Twenty"

//ARRAY
let names = ["John", "jane", "Tom"];

names.push("mike");

let numbers = [1, 2, 3, 5];

numbers.push(85);

let stringArray: string[] = [];

stringArray = ["John", "jane", "Tom"];

//stringArray = ["John", "jane", 88]; // we cannot assign numbners in String of array,  warning Pops as Type 'number' is not assignable to type 'string'.

let numberArray: number[] = [];

numberArray = [88, 99, 698];

// Union types for Array
let stringprNumberArray: (string | number)[] = [];

stringprNumberArray = [88, 99, 698, 88, 99, 698];

//OBJECTS
let user = {
    username: "john",
    age: 22,
    isAdmin: false
}


user.username = "jane";
//user.username = 18 // username cannot be assigned with  Type 'number' is not assignable to type 'string'. Since we have already assigned username with String value
user.age = 29;

user.isAdmin = true;

//user.phone = "895258969" // You Cannot create/Assign Extra Key to a Predifined Object;



//Predefined Object with types
let userObj: {
    username: string,
    age: number,
    isAdmin: boolean
}


userObj = {
    username: "john",
    age: 22,
    isAdmin: false,
    //Phone: "741852963" we cannot use 
}


let userObj2: {
    username: string,
    age: number,
    isAdmin: boolean,
    phone?: string // We can predefine the optional key in Object
}

userObj2 = {
    username: "john",
    age: 22,
    isAdmin: false,
    phone: "741852963"
}

//ANY

//Note: If you dont specify any type for the varialbe typescript assuignes the type of the varailble as any 
let testAny: any;

testAny = 12;
testAny = "string";
testAny = true;
testAny = ["adc", 12];
testAny = {};


//Note: we should not use any type, because we are wokiing  with the typescript everything shopuld be type defined

// FUNCTIONS
//void returning function
let sayHI = () => { }

let functionreturnongString = (): string => {
    return 'Kanishka'
}


let functiontakeArgument = (num: number) => {
    return num * 2
}
// below func is same as above function 
let functiontakeArgumen2 = (num: number): number => {
    return num * 2
}
// optional paramter in function
let sum = (num: number, num2: number, anothernum?: number): number => {
    return num + num2
}

sum(1, 2);

let func = (user: {
    // username: string,  Defining type for user like this is not right and there will be no realiablilty, its better to use Type Aliases
    // age: number,
    // phone: string   
}) => {

}


//TYPE ALIASES

type UserType = {
    username: string,
    age: number,
    phone: string,
}

let betteFunction = (user: UserType) => {
    console.log(user.username);
}

// we can predefine the function Type using TYPE ALIASES

type myFunc = (a: number, b: string) => void

let write: myFunc = (num, str) => {
    console.log(num + 'lines' + str);

}


type UserType2 = {
    username: string,
    age: number,
    phone: string,
    theme: 'dark' | 'light' // theme can only be dark or light, then it will give error
}

const userwithTheme: UserType2 = {
    username: 'john',
    age: 22,
    phone: 'adbasdc',
    theme: "dark"
}

//INTERFACES

// we can define the Extendable interface 
interface IUser {
    username: string,
    age: number,
    phone: string,
}


// we are extending User key with Types and add Extra/ Required Keys with type
interface IEmployee extends IUser{
    employeeId:number
}

const emp :IEmployee ={
    username: 'john',
    age: 22,
    phone: 'adbasdc',
    employeeId:1
}


const Client :IUser ={
    username: 'john',
    age: 22,
    phone: 'adbasdc',
}


//GENERICS

interface  IAuthor{
    id:number,
    username:string
}

interface ICategory{
    id:number,
    title:string
}



interface IPost{
    id:number;
    title:string;
    desc:string;
    extra: IAuthor[] | ICategory[]
}


interface IPostbetter<T>{
    id:number;
    title:string;
    desc:string;
    extra: T[]
}

const testMe : IPostbetter<string> = {
    id:1,
    title:"ass",
    desc:"desc",
    extra:['adc','adc']
}

interface IPostEvenbetter<T extends object>{
    id:number;
    title:string;
    desc:string;
    extra: T[]
}


const testMeEvenBetter : IPostEvenbetter<IAuthor> = {
    id:1,
    title:"ass",
    desc:"desc",
    extra:[{id:1,username:'adcasdc'}]
}



const testMeEvenBetterCategory : IPostEvenbetter<ICategory> = {
    id:1,
    title:"ass",
    desc:"desc",
    extra:[{id:1,title:'adcasdc'}]
}

testMeEvenBetter.id = 2
