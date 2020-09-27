
## How to Use React Firestore Boilerplate

### Step 1 - Create a New Repo from this Template
 - From this project's GitHub repo page, select 'Use this Template'
 - Fill out the information for the new repo

### Step 2 - Clone the New Repo
 - Once the new GitHub repo has been created, clone the repo to your local machine

### Step 3 - Install dependencies
 - Navigate to the directory with your local repo and run `npm i` 

### Step 4 - Configure Firebase Project
 - Create a new Firebase project
    - Enable Google Analytics during creation if desired
 - Enable your preferred sign-in method(s) from the Firebase console (Authetication section)
    - The Sign-In page contains elements for both password-based and Google-based authentication strategies, and the Account page lets you control which strategies are enabled
    - Remove any components according to the desired auth strategy for your app
 - Register your project as a Web App to view the project config info
 - (optional) Create your first Firestore collection from the Firebase console (Cloud Firestore section)

### Step 5 - Configure Environment Variables
- Add a `.env` file to the project root directory declaring the following environment variables using the infomation from the Firebase project config:
    - `REACT_APP_API_KEY=`
    - `REACT_APP_AUTH_DOMAIN=`
    - `REACT_APP_DATABASE_URL=`
    - `REACT_APP_PROJECT_ID=`
    - `REACT_APP_STORAGE_BUCKET=`
    - `REACT_APP_MESSAGING_SENDER_ID=`
    - `REACT_APP_APP_ID=`
    - `REACT_APP_CONFIRMATION_EMAIL_REDIRECT=`

### Starting the Development Server
 - Run `npm start` to launch the dev server 

### Building the Project
- Run `npm build` to create a production build of the project

----------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
