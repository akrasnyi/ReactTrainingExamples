// To start off, let’s do the “hello world” of generics: the identity function. The identity function is a function that
// will return back whatever is passed in. You can think of this in a similar way to the echo command.
// Without generics, we would either have to give the identity function a specific type:

function identity(arg: number): number {
    return arg;
}

// Or, we could describe the identity function using the any type:

function identity2(arg: any): any {
    return arg;
}

// We need a way of capturing the type of the argument in such a way that we can also use it to denote what is being
// returned. Here, we will use a type variable, a special kind of variable that works on types rather than values.
function identity3<T>(arg: T): T {
    return arg;
}

const output = identity3('myString');  // type of output will be 'string'

// TODO create generic for function sum
function sum(a: any, b: any) {
    return a + b;
}

// When you begin to use generics, you’ll notice that when you create generic functions like identity, the compiler will
// enforce that you use any generically typed parameters in the body of the function correctly. That is, that you
// actually treat these parameters as if they could be any and all types.
function loggingIdentity<T>(arg: T): T {
    // console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

interface Lengthwise {
    length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T) {
    console.log(arg.length);
    return arg;
}

// const a = loggingIdentity2(2); //error, because type Number have not property length
const d = loggingIdentity2('123');
const e = loggingIdentity2([1, 2, 3]);

// We can use generic to typify variables and interfaces
const myIdentity: <T>(arg: T) => T = identity3;

interface IGenericIdentityFn<T> {
    <T>(arg: T): T;
}

const myIdentity2: IGenericIdentityFn<number> = identity3;

// TODO create interface and typed variable for function sum that you implemented above

// A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in
// angle brackets (<>) following the name of the class.
class GenericNumber<T> {
    public zeroValue: T;
    public add: (x: T, y: T) => T;

    public constructor(zeroValue: T, add: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.add = add;
    }
}

const myGenericNumber = new GenericNumber<number>(0, sum);
const myGenericNumber2 = new GenericNumber<string>('', sum);
//const myGenericNumber3 = new GenericNumber<number>('', sum);// error, because first argument is not a number

// Enter Index Type Query or keyof; An indexed type query keyof T yields the type of permitted property names for T.
// A keyof T type is considered a subtype of string.
interface Person {
    name: string;
    age: number;
    location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[];  // "length" | "push" | "pop" | "concat" | ...
type K3 = keyof { [x: string]: Person };  // string

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const props = { a: 1, b: 2, c: 3, d: 4 };

getProperty(props, 'a'); // okay
//getProperty(props, 'm'); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
