// Named function
function add(x: number, y: number): number {
    return x + y;
}

// Anonymous function
const myAdd = function (x: number, y: number): number { return x + y; };
// Arrow function
const myAdd2 = (x: number, y: number): number => (x + y);

// Optional and default parameters
function buildName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

// const result1: string  = buildName('Mike'); // error, too few parameters
// const result2: string  = buildName('Mike', 'Vazovsky', 'Sr.'); // error, too many parameters
const result3: string = buildName('Mike', 'Vazovsky');
// In JavaScript, every parameter is optional, and users may leave them off as they see fit. When they do, their value
// is undefined

// We can also set a value that a parameter will be assigned if the user does not provide one, or if the user passes
// undefined in its place. These are called default-initialized parameters.
function buildName2(firstName: string, lastName = 'Smith'): string {
    return `${firstName} ${lastName}`;
}

// Also we can make parameter as optional. In this case it comes after all required parameters.
function buildName3(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}

const res: string = buildName3('Mike'); //res = Mike undefined;

// You can gather these arguments together into a variable with rest parameter.
function buildName4(firstName: string, ...restOfName: string[]) {
    return `${firstName} ${restOfName.join(' ')}`;
}

const employeeName = buildName4('Joseph', 'Samuel', 'Lucas'); // Joseph Samuel Lucas


// TODO Typify next functions

function calculateAmountOfCharacters(text: any): any {
    return text.length;
}

const calculateAmountOfNumbers = (numbers: any): any => {
    return numbers.length;
};

const createArrayFromListOfNumbers = function (...listNumbers: any): any {
    return listNumbers;
};