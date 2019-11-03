
- RUN
    npm run dev

------------------------------------------------------------------------------------

- Install json-server, concurrently as dev dependency
    mehmetak@MEHMETs-MacBook-Pro it-logger % npm install -D json-server concurrently
- json-server will be the development backend for this project
    - Create a db.json file in the root folder
    - In package.json add to scripts
        "json-server": "json-server --watch db.json --port 5000",
        "dev": "concurrently \"npm start\" \"npm run json-server\""
- Add proxy to the package.json
        "proxy": "http://localhost:5000"
- Run the client with npm run dev
    - See the client in http://localhost:3000/
    - See the users data in json-server in http://localhost:5000/users

- Install Material-UI
    npm install @material-ui/core @material-ui/icons clsx

 Establish Redux
    - Install dependencies
        mehmetak@MEHMETs-MacBook-Pro it-logger % npm install redux redux-devtools-extension redux-thunk react-redux react-router-dom
    - Create a directory called "redux" under the folder "src"
        - Create a file called "store.js" in the "redux" folder.
        - Create a directory called "actions" in the "redux" folder
            - Create a file called "logActions.js" in the "actions" folder
            - Create a file called "actionTypes.js" in the "actions" folder
        - Create a directory called "reducers" in the "redux" folder
            - Create a file called "rootReducer.js" in "reducers" folder
            - Create other reducers as they are required
    - The Folder Structure Will Be
        src
            redux
                actions
                    logActions.js
                    techActions.js
                    actionTypes.js
                reducers
                    logReducer.js
                    rootReducer.js
                    techReducer.js
                store.js