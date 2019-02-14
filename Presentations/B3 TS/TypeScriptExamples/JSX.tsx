// look at folder 'examples-from-slides'
import * as React from 'react';
import NavigationPanel from '../common/NavigationPanel/NavigtionPanel';
export {};

interface IUserWithAvatar extends IUser {
    avatarUrl: string;
}

const user: IUserWithAvatar = {
    avatarUrl: 'qwe',
    name: 'Mike'
};

const element: JSX.Element = <h1>Hello, { user.name }</h1>;

function formatName(str: string): string {
    return str.toUpperCase();
}

function getGreeting(userName: string): JSX.Element {
    if (userName) {
        return <h1>Hello, { formatName(userName) }!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const input: JSX.Element = <input type='text'/>;

const avatar: JSX.Element = <img src={ user.avatarUrl } alt='user-avatar'/>;

const div: JSX.Element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);

// TODO create element User with fields avatar and name

// The first part of a JSX tag determines the type of the React element. Capitalized types indicate that the JSX tag is
// referring to a React component. These tags get compiled into a direct reference to the named variable, so if you use
// the JSX <Foo /> expression, Foo must be in scope(for example - import Foo from 'path')
// Since JSX compiles into calls to React.createElement, the React library must also always be in scope from your JSX
// code. For example, both of the imports are necessary in this code, even though React and NavigationPanel are not
// directly referenced from TypeScript:

const Navigation: React.FunctionComponent = () => (
    <NavigationPanel links={ [] }/>
);

// User-Defined Components Must Be Capitalized. When an element type starts with a lowercase letter, it refers to
// a built-in component like <div> or <span> and results in a string 'div' or 'span' passed to React.createElement.
// Types that start with a capital letter like <Foo /> compile to React.createElement(Foo) and correspond to a component
// defined or imported in your TypeScript file.

// Wrong! This is a component and should have been capitalized:
function hello(props: { toWhat: string }): JSX.Element {
    // Correct! This use of <div> is legitimate because div is a valid HTML tag:
    return <div>Hello { props.toWhat }</div>;
}

function HelloWorld(): JSX.Element {
    // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
    return <hello toWhat='World'/>;
}

// To fix this, we will rename hello to Hello and use <Hello /> when referring to it:
// Correct! This is a component and should be capitalized:
function Hello(props: { toWhat: string }) {
    // Correct! This use of <div> is legitimate because div is a valid HTML tag:
    return <div>Hello { props.toWhat }</div>;
}

function HelloWorld2() {
    // Correct! React knows <Hello /> is a component because it's capitalized.
    return <Hello toWhat='World'/>;
}

// If you pass no value for a prop, it defaults to true. These two JSX expressions are equivalent:
const input2: JSX.Element = <input type='text' disabled={ true }/>;
const input3: JSX.Element = <input type='text' disabled/>;

interface IGreetingProps {
    firstName: string;
    lastName: string;
}

const Greeting: React.FunctionComponent<IGreetingProps> = ({ firstName, lastName }) => (
    <div>
        <div>
            Name: { firstName }
        </div>
        <div>
            Last name: { lastName }
        </div>
    </div>
);

// If you already have props as an object, and you want to pass it in JSX, you can use ... as a “spread” operator
// to pass the whole props object. These two components are equivalent:

function App1(): React.ReactNode {
    return <Greeting firstName='Mike' lastName='Vazovsky'/>;
}

function App2(): React.ReactNode {
    const props: IGreetingProps = {
        firstName: 'Mike',
        lastName: 'Vazovsky'
    };
    return <Greeting { ...props } />;
}