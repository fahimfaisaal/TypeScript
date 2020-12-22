//! Object boilerplate by using interface
interface User {
  name: string;
  age: number;
  id: number;
  phone: number;
}

const user: User = {
  name: "Fahim",
  age: 22,
  id: 0,
  phone: 8801701081446,
};

// console.log(user);

//* Build a class
class UserAccount {
  name: string;
  age: number;
  id: number;
  phone: number;

  constructor(name: string, age: number, id: number, phone: number) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.phone = phone;
  }
}

const userAcc: User = new UserAccount("Fahim Faisal", 22, 0, 8801701081446);

// console.log(userAcc);

//* Array in typeScript
let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let arr2: Array<number> = [14, 15, 16, 17, 18, 19, 20, 21, 22];
let arr3: string[] = ["Fahim Faisal", "Soikot", "Shakil", "Turky", "Sourov"];
let arr4: boolean[] = [true, false];

for (let i: number = 0; i < arr.length; i++) {
  // console.log("Array1->", arr[i]);
  // i < arr2.length && console.log("Array2->", arr2[i]);
}

//* Tuple in typeScript

let tuple: [number, string] = [22, "soikot"];

tuple[1];
