# gamified-todo
A React Native app to make doing everyday tasks more fun for nerds.

<div style="display:flex;flex-direction:row;">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" width=120 height=100/>
<img src="https://avatars.githubusercontent.com/u/13142323?v=4" width=120 height=100/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" width=100 height=100/>
</div>


Start your own adventure through menial day-to-day tasks. Add some skills you would like to hone, add some tasks to do in order to hone said skills and level up. Set achievements for yourself in a fun way. Anything you would like can be turned into a task (yes, really!) in order to level up and even join higher ranks, where you can compete with your friends on who's the most productive of them all (TBA).

This application has been made as the final project for Harvard's **CS50** course. It features a complete tech-stack to facilitate development using technologies used in the industry.

**React**

React is a popular JavaScript library that helps in creating dynamic and reactive user interfaces. Unlike regular web pages, React uses JSX, a special syntax that allows developers to use HTML's markup tags inside of JavaScript without finnicking with any **document.createElement**s or **document.querySelector**s. React promotes clean and modular code through its function components, which can be used as templates for apps.

As it matured, React has also extended its scope from only being a web library to also powering complex cross-platform applications through its counterpart, **React Native**. It allows developers to write familiar React syntax in order to create cross-platform applications. The most popular framework to work with in React Native is **Expo**, which has also been used for this project. Expo features a large ecosystem of both first party and third party compatible packages while also facilitating the development process through great tooling.

**TypeScript**

We all now JavaScript, it's the language that powers the web. However, JavaScript is quite volatile: you could be coding a button that sends a request for data, but it actually crashes everything down. A lot of this is caused by the fact that, unlike C or Java, **JavaScript** does not have a proper type system. There's only a few primitive types that aren't even enforced, which can be the culprit for a lot of the problems in our code. TypeScript tries to prevent most of this hassle by adding type annotations in JavaScript. These annotations are quite similar to the ones in Python - you mark the type your variable should be and you receive errors or warnings if the TypeScript compiler finds mismatches between types and their properties. It is a very useful tool.

**Redux**

As previously mentioned, this project uses React. For state management, React has built-in hooks to manage application state (useState(), useContext()), but sometimes these do not make up for an elegant solution to separate the concerns of an app, so we might need something more complex to manage our state. This is where Redux comes into play, which allows us to manage the state throughout our entire app using a global state managed using **reducers**. Reducers are functions that are dispatched in the app's runtime, modify the global state, and trigger the re-rendering of our app (which is why we can't just use a JSON or something along those lines!).

However, Redux is a pretty hefty tool. Configuring it for the majority of cases is uneccessary and can become a hassle. Though, for this project, it comes in handy, as pretty much the whole app requires global state that needs to be managed in a clean way. It also facilitates the ease of persistence through third-party packages like redux-persist.
