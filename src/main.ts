console.clear();
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
  //   console.log(Colors[i]);
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
function returnNothing(name: string): void {
  console.log(`I am ${name}`);
}

// returnNothing("Fahim Faisal");
