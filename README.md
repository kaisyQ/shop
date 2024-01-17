# Frontend for BM-shop website

This project is build in React flux architecture.
You can read more in this link: https://www.geeksforgeeks.org/javascript-architecture-flux-components/
As a main store we are using Redux(@toolkit) library.
You can read more in this link: https://redux-toolkit.js.org/


## Installing the project
1. Install nodejs and npm 
   ```https://nodejs.org/en/download```
2. Clonning the repo
   ```git clone https://github.com/kaisyQ/shop.git```
3. Install dependencies
   ```npm install```
4. Run development server
   ``` npm run dev```

## Architecture
| Folder      | Description                                                     |
|-------------|-----------------------------------------------------------------|
| store/      | store and all redux features                                    |
| views/      | main pages components                                           |
| tests/      | application tests                                               |
| components/ | All components                                                  |
| api/    	  | all api methods(using axios)                                    |
| constants/  | application constants                                           |
| router/	    | contains all routes definitions                                 |
| types/      | application types (try not to use it)                           |
| yup/        | validators                                                      |
| hooks/	    | application hooks                                               |  
| models/	    | models which are used in components level                       |
| images/	    | images, logos and svgs                                          |

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
