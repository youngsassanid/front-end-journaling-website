# Link to Demo
https://github.com/sfsu-csc413-04-sp2025/final-project-front-end-team-14/blob/main/demo_video.mp4

demo_video.mp4 is the video reviewing the website. It is located in this Github repo.

# Sam Kazemi’s Contributions
During development, I added several front-end features to improve functionality and user experience. I integrated Spotify for music playback and included info on featured singers. A slider component and tabbed navigation at the top enhanced visual structure and usability. The website tab was also reformatted for better layout and content separation.
The journal component received major upgrades: users can see word count and last saved time using useEffect. A "Copy to Clipboard" feature was added using navigator.clipboard.writeText(). Multiple entries are supported through the handleSaveEntry() function, with each journal saved in localStorage. Users can remove entries with the handleDeleteEntry(index) method.
I also displayed the page load time using new Date().toLocaleTimeString(). For login and signup, handleCreateAccount() validates username and password length and enforces at least one uppercase letter and special character using regex. The handleLogin() function authenticates users by checking stored credentials.
Access to the journal is restricted to signed-in users, using conditional rendering based on login status. These features collectively enhance the app’s security, interactivity, and user-friendliness, with all handlers and methods designed for simplicity and efficiency.

# Denis’s Contributions
The handlers/methods I worked on were surrounding login, dark mode, and the journal. For Login, I created the handlers handleLogin(), handleCreateAccount(), and the majority of the Login file. When someone clicks on creating an account after inputting their data in the fields, the app will run the handler and will store the users' information and create their account. Similarly, once you hit the login button after inputting your information into the login fields, the app will trigger the login handler, which will log you in, and grant you access to new features like the journal. I worked on the Journal file and created a simple journal that took in text and submitted it. I worked on the handler for the submit button (handleSubmit()), but Sam added more to what I did, and created a more appealing journal through new features. I also created a handler for dark mode. When you click on the dark mode button, the event will trigger a function to activate and handle dark mode " (() => setDarkMode(!darkMode)) ", which is in App.js. This will toggle the dark mode state to on or off (true/false). Finally, I worked on the logout features. If you are not logged in, I made it so that you don't have access to the journal button. If you are logged in, you will stay logged in until you have logged out, and you'll have access to the journal feature. Once a user logs in, their logged-in state is set to true. If they log out, then the state of being logged in is set to false. This is how I'm able to know if a user is logged in or not, and when to display the Journal button. This is all in App.js. I did some event handling with the logout button.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
