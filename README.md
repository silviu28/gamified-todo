# Gamified ToDo
#### Video Demo: https://www.youtube.com/watch?v=f3aIP9zEbpY
#### Description:

<div style="display:flex;flex-direction:row;">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" width=120 height=100/>
<img src="https://avatars.githubusercontent.com/u/13142323?v=4" width=120 height=100/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" width=100 height=100/>
</div>


An app made to keep you motivated while doing menial day-to-day tasks, inspired by video game systems, such as skills and leveling up. Set yourself some skills you want to hone, then add some tasks to level them up. Alternatively, leave the manual process of adding skills and tasks to the app itself and just filter out whatever you might want to keep. Watch yourself gain experience using tangible metrics, so long as you keep in touch with the app.
Add a personal touch to your progress using themes. Create a personal profile and boast about it to your friends (alternatively, let yourself get boasted on, too).

This app has been created using <a href="https://reactnative.dev/">React Native</a>, with the help of <a href="https://expo.dev/">Expo</a>. React is a popular JavaScript library used for the web in order to make Single-Page Applications (or SPAs for short). Its smaller brother, React Native, brings all the nice things of React to native development, allowing people that might've had experience with React (like me!) to port it over to platform-independent apps through the so-called "JavaScript bridge", which interprets the code to their platform-specific counterpart. This allows us to have only one codebase to manage. Unfortuntely, React Native by itself is quite rough around the edges, as it is pretty tough to integrate every platform's feature set, this would require a lot of code branching depending on the platform. Luckily, this is where Expo comes in, which brings in a lot of useful tools alongside many utilities that have this platform-specific code already written.
This project also uses TypeScript, which brings in type annotations to JavaScript, so that the code becomes easier to read, maintain and debug.

#### Why?

Video games are fun, most of us indulge into them from time to time. In games you usually have an objective metric of your progress, a certain level or rank that helps you unlock items, areas, or simply to keep the player engaged. I discovered that "gamifying" tasks that I usually don't find entertaining (like doing the dishes) helps me out, so I decided to create this app to share to everyone this "gamifying spirit" so to say! I've allowed the end user to pick and choose whatever might serve them the best instead of setting the skills and tasks myself. There's no real competition, only with your older self!

#### How to run

In order to build this app, you will need Node.js 22. I recommend using this version as this is what I worked in and a newer/older version might be incompatible with the NPM packages used (you might want to change your Node.js version using <a href="https://github.com/nvm-sh/nvm">Node Version Manager</a>).
In the root directory, run:

```
npm install
```

This will retrieve all dependencies of the application. Now we need to bundle the application, so that we can actually see what's going on. Run:

```
npx expo start
```

This will start the Expo server and bundle our JavaScript for any device that might connect via the URL or QR code displayed in the terminal. For mobile you can connect from the browser, or using <a href="https://expo.dev/go">Expo Go</a>, provided you are on the same network as your computer. If you want to build the app so it persists on your device, there's an EAS (Expo App Services) configuration already included. First login to EAS:

```
npx eas login
```

Then run build using a profile. For example, if you want an Android APK, use:

```
npx eas build --profile apk --platform android
```

Open the link in your browser. After the deployment finishes, download the file and push it to your device.

#### Graphical User Interface

As previously stated, gamified-todo has been created in React Native, which uses [function components]. We declare these components as simple functions that return JSX, a syntax specific to React that allows us to write both JavaScript and markup code in the same file. These components can be mixed and matched throughout our whole app, in gamified-todo we have both a <SkillContainer> and a <TaskContainer> component, which are used in things like showing the user what skills and tasks they've set.

#### Randomized suggestions

To enrich the experience for the user, the option to suggest tasks and skills has been added. These are provided using a the public border-api Web API using a GET method. In this case, I've opted for using the <a href="https://axios-http.com/">Axios HTTP client</a> instead of JavaScript's fetch API. This is because Axios is more convenient and stable, which is prefferable.
Do keep in mind that sometimes the request might be rejected, as the API might rate limit the user.


#### Data persistence

This app uses <a href="https://redux.js.org/">Redux</a>, a JavaScript library that handles global state - this is data that will get used everywhere in our app. Redux provides an easy mechanism to store this data, and modify it using functions called reducers. These reducers are easily called using a dispatch function in which we declare what reducer we want to call, alongside with a payload, which usually is the data that we want to derive the next state from. 
gamified-todo uses global state across pretty much the whole app, everything from the skills and tasks to the levels, preferences and more are saved in a Redux store that is modified using reducers. Additionally, using the <a href="https://github.com/rt2zz/redux-persist">redux-persist</a> library, we can save this data to the device's storage (provided by Expo as AsyncStorage), so that we don't lose all of our progress once we quit.

Created with 💜 by Silviu, check out my GitHub for more projects
