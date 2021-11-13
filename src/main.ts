console.clear();
import Human from "./classes/Human";
import Profile from "./classes/Profile";
import Location from "./Interface/Location";
import "./practice";

/**
 *# Basic types
 * Boolean
 * Number
 * String
 * BigInt
 * Array
 * tuple
 * Enum
 * Unknown
 * Any
 * Void
 * Null and Undefined
 * Never
 * Object
 * Type assertion
 * Interface
 */

//* Boolean in typeScript
let bool: boolean = true;
let boolArr: boolean[] = [true, false, true, true];

//* Number in typeScript
let number: number = 1;
let numberArr: number[] = [1, 2, 3, 4, 5, 6, 7];

//* String in typeScript
let string: string = "Fahim Faisal";
let stringArr: string[] = ["Fahim Faisal", "Soikot", "Shakil"];

//* BigInt in typeScript - ES2020
// let bigInt: bigint = 1n
// let bigIntArr: bigint = [200n, 300n]

//* Array in typeScript
let arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2: number[] = [1, 2, 3, 4, 5, 6];

//* Tuple in typeScript
let tuple: [number, string, boolean] = [22, "Fahim Faisal", true];

//* Enum in typeScript
enum Colors {
  red = 1,
  green = 5,
  blue = 9,
}

const colorRed: string = Colors[1];
const colorGreen: string = Colors[5];
const colorBlue: string = Colors[9];

// console.log(colorRed, colorGreen, colorBlue);
const colorRedCode: Colors = Colors.red;
const colorGreenCode: Colors = Colors.green;
const colorBlueCode: Colors = Colors.blue;

// console.log(colorRedCode, colorGreenCode, colorBlueCode);

for (let i in Colors) {
  //   // console.log(Colors[i]);
}

//* unknown in typeScript
const unknownString: unknown = "String";
const unknownNumber: unknown = 1234;
const unknownBoolean: unknown = false;

//# It's could be any data type
let notSure: unknown = 4;
notSure = false;
notSure = "string";
notSure = 1234;

//* any in typeScript
let anyType: any = "String";
let numberType: number = 1234;
numberType = anyType; //* it's the main issue of any type
// console.log(numberType);

//* Void in typeScript
let unusable: void = undefined;

function returnNothing(name: string): void {
  // console.log(`I am ${name}`);
}

// returnNothing("Fahim Faisal");

//* Alias type
type resultCal = {
  add: number;
  sub: number;
  mul: number;
  div: number;
};

function calcOfTwo(x: number, y: number, action: unknown): number | string {
  const result: resultCal = {
    add: x + y,
    sub: x - y,
    mul: x * y,
    div: x / y,
  };

  const getResult: number | undefined = result[action as keyof resultCal];

  return getResult ? getResult : "Invalid operation";
}

// console.log(calcOfTwo(1, 2, "sjdhf"));

//  function Signature
let profile: (name: string, age: number) => string;
let greet: (name: string, greet: string) => string;

profile = (name: string, age: number): string => {
  const profileString = `name = ${name} age = ${age}`;

  return profileString;
};

greet = (name: string, greet: string): string => {
  return `${greet}, ${name}`;
};

// console.log(profile("fahim faisal", 23));
// console.log(greet("fahim faisal", "Assalamu alaikum"));

// let div: HTMLDivElement[];

// class

const user: Profile = new Profile("fahim", 23, "fahim@gmail.com");

// console.log(user.getGmail);

const formValues: { [field: string]: unknown } = {
  firstName: "Bob",
  surname: "Smith",
  age: 30,
};

formValues.location = "Bangladesh";

enum Level {
  Heigh = "H",
  Medium = "M",
  Low = "L",
}

let level: Level = Level.Low;

let value: string = Level.Heigh;

if (value === Level.Heigh) {
  // console.log("My height is 5 feet 7 inch");
}

// console.log(level);

interface Names {
  [key: number]: string;
}

const obj: Names = {
  23: "stirng can accept",
  76: "string not acces",
};

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const address: Location = {
  region: "Asia pacific",
  state: "Bangladesh",
  city: "Rajshahi",
  town: "Naogaon",
  village: "Par-Naogaon",
};

const man: Human = new Human("Fahim Faisal", 23, 5.7, 56, address);
man.setPhone = "+8801721494068";
// console.log(man.toString());

// Generics
/**
 * T for type
 * S for sate
 * E for element
 * K for key
 * V for value
 */
//! Generics with interfaces

interface person<T> {
  name: string;
  age: T;
  id: string;
}

const p1: person<string> = {
  name: "Fahim Faisal",
  age: "23",
  id: "348349583458",
}

const p2: person<number> = {
  name: "Soikot",
  age: 23,
  id: "348349583458435",
}
