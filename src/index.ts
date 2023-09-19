import { isContext } from "vm";

let sales: number = 1234; // we can remove type define as TS will detect it automatically
let course: string = "TypeScript";
let published: boolean = true;
let level; // TS will make it type any by default
// HERE ARE SOME COMMENTS WHICH WILL NOT GET EMITTED IN ../compiled-files/index.js

let number: number[] = [1, 2, 3];
// we cannot use [1,2,'3'] like JS
let number2 = []; // default type 'any[]'
let number3 = [1, 2, 3]; // default type 'number[]' as we have values in array

let user: [number, string] = [1, "Sample_Name"]; // define each position to use mixed types

enum Size {
  small = 5,
  medium,
  large,
} // compiler sets default values starts from 1 and adding +1 for each index
// if we set small = 5 now medium and large will auto become 6 & 7
// auto only work with numbers
let mysize: Size = Size.medium;
console.log(mysize); // will get value of Size.medium
