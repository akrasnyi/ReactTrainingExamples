// The easiest way to see how interfaces work is to start with a simple example
function sayHi(user: { name: string }): void {
    console.log(`Hi ${user.name}`!);
}

// We can write the same example again, this time using an interface to describe the requirement of having the name
// property that is a string. We have simple convention - every interface name start from "I".
interface IUser {
    name: string;
}

// TODO create Object with type User and show autocomplete. Try to add another property.

// Not all properties of an interface may be required. Some exist under certain conditions or may not be there at all.
interface ISquareConfig {
    color?: string;
    width?: number;
}

interface ISquare {
    color: string;
    area: number | null;
}

function createSquare(config: ISquareConfig): ISquare {
    return {
        color: config.color ? config.color : 'defaultColor',
        area: config.width ? config.width * config.width : null
    };
}

// Some properties should only be modifiable when an object is first created. You can specify this by putting
// readonly before the name of the property

interface IPoint {
    readonly x: number;
    readonly y: number;
}

const p1: IPoint = { x: 10, y: 20 };
//p1.x = 5; // error!

const arr: number[] = [1, 2, 3, 4];
const ro: ReadonlyArray<number> = arr;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!

// To describe a function type with an interface, we give the interface a call signature.
interface ISearchFunc {
    (source: string, subString: string): boolean;
}

const mySearch: ISearchFunc = function (source: string, subString: string): boolean {
    const result: number = source.search(subString);
    return result > -1;
};

// Indexable types have an index signature that describes the types we can use to index into the object, along with
// the corresponding return types when indexing
interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = ['Bob', 'Fred'];

// Implementing an interface
interface IClock {
    currentTime: Date;
}

class Clock implements IClock {
    public currentTime: Date = new Date();
}

// We can also describe methods in an interface that are implemented in the class.
// To reuse our code we can extends our interfaces. IDigitalClock will have property currentTime and it's own property.
interface IDigitalClock extends IClock {
    setTime: (time: Date) => void;
}

class DigitalClock implements IDigitalClock {
    public currentTime: Date = new Date();
    public setTime = (time: Date) => {
        this.currentTime = time;
    };
}

// An interface can extend multiple interfaces, creating a combination of all of the interfaces.
interface IShape {
    color: string;
}

interface IPenStroke {
    penWidth: number;
}

interface IRectangle extends IShape, IPenStroke {
    sideLength: number;
}

const square = <IRectangle>{}; // type assertion.
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;

// TODO create interface for class below.
class User {
    public readonly name: any;
    public surname: any;

    public constructor(name: any, surname: any) {
        this.name = name;
        this.surname = surname;
    }

    public setSurname = (surname: any): any => {
        this.surname = surname;
    };
}

// In TypeScript, we can use common object-oriented patterns. One of the most fundamental patterns in class-based
// programming is being able to extend existing classes to create new ones using inheritance.
class Animal {
    public move(distanceInMeters: number = 0): void {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    public bark(): void {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

// This example shows the most basic inheritance feature: classes inherit properties and methods from base classes.
// Here, Dog is a derived class that derives from the Animal base class using the extends keyword.

// TODO create basic class Bird, that can fly, and class Duck, that can quack

// In our examples, we’ve been able to freely access the members that we declared throughout our programs. This is
// because we use the word "public" to accomplish this. But TypeScript has ability to mark some property or method
// like "protected" or "private".

class Employee {
    private _name: string; // This is also convention - every private property or method start from "_"
    protected surname: string;

    public constructor(name: string, surname: string) {
        this._name = name;
        this.surname = surname;
    }

    public get getName(): string { // if you want to get private property you can create getter for this.
        return this._name;
    }
}

class Developer extends Employee {
    public constructor(name: string, surname: string) {
        super(name, surname);
    }

    public sayHi = () => {
        //console.log(`Hi - ${this._name}`) // error, because we can call private property or method only in base class
        console.log(`Hi - ${this.surname}`); // we can call protected property or method in child class.
    };
}

const dev: Developer = new Developer('Mike', 'Vazovsky');
//const devName: string = dev._name // error, we can not call private or protected property or method on instance.
//const devSurname: string = dev.surname
const developerName: string = dev.getName;

// Private and protected property and methods are using for encapsulation data.

// TODO create class Vector with property firstPoint(x, y) and secondPoint(x, y) and method for calculation vector length

// TypeScript has a lot of fiches(static method, abstract classes etc), which we can present in advanced course.
// But if someone want to look on it now - this is simple implementation of design pattern observer, decorator and adapter
// https://stackblitz.com/edit/typescript-383bgb
// https://stackblitz.com/edit/typescript-gg7pzs
// https://stackblitz.com/edit/typescript-jno5k6