// boolean - can have two values: true or false
const isBoolean: boolean = true;

// As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type
// number.
const decimal: number = 6; // change type of value to string and show an error
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

// As in other languages, we use the type string to refer to these textual datatypes.
const color: string = 'blue';
const favoriteColor: string = `My favorite color is ${color}`;

// Array types can be written in one of two ways.
const list: number[] = [1, 2, 3]; // Add string literal and show an error.
const secondList: Array<number> = [1, 2, 3];

// Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the
// same.
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error

// The never type represents the type of values that never occur.
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Object is a type that represents the non-primitive type, i.e. any thing that is not number, string, boolean, symbol,
// null, or undefined.
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
const someValue: any = 'this is a string';

const strLength: number = (someValue as string).length;

// A helpful addition to the standard set of datatypes from JavaScript is the enum.
enum Color { Red, Green, Blue }

const c: Color = Color.Green;
const newC: string = Color[2]; // Blue

// We may need to describe the type of variables that we do not know when we are writing an application.
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean

// "void" is a little like the opposite of any: the absence of having any type at all.
// You may commonly see this as the return type of functions that do not return a value
function warnUser(): void {
    console.log('This is my warning message');
}

// Both undefined and null actually have their own types named undefined and null respectively.
// By default null and undefined are subtypes of all other types. That means you can assign null and undefined to
// something like number. But we use flag --strictNullChecks.
const u: undefined = undefined;
const n: null = null;


// TODO Typify next variables:

const a = ['qwe', 'true', 1.12];
const b = String(1 + 2);