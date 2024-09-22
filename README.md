# CryptoWebsite with user authentication

File structure defining important files:

-backend
    -Apis  (Contains API's required for the website)
      -Signin.js  
      -Signup.js
    -mongoose  (Contains database interactions)
      -dbconnect.js  (used for creating and connecting to database)
      -userModel.js  (used for creating schema and interacting with that)
    -index.js  (used to connect frontend with backend)
-frontend
  -src
    -components  (contains components of the frontend along with css files)
      -Home.jsx  (Contains Home page code)
      -Home.css
      -Signin.jsx  (Contains signin page code)
      -Signin.css
      -signup.jsx  (Contains signup page code)
      -signup.css
      -Welcome.jsx  (Contains Welcome page code which appears after signin)
      -Welcome.css
    -App.jsx
    -App.css
    -index.jsx
    -index.css

## Backend
- **Apis** (Contains API's required for the website)
  - `Signin.js`
  - `Signup.js`
- **mongoose** (Contains database interactions)
  - `dbconnect.js` (used for creating and connecting to database)
  - `userModel.js` (used for creating schema and interacting with that)
- `index.js` (used to connect frontend with backend)

## Frontend
- **src**
  - **components** (Contains components of the frontend along with CSS files)
    - `Home.jsx` (Contains Home page code)
    - `Home.css`
    - `Signin.jsx` (Contains Sign-in page code)
    - `Signin.css`
    - `Signup.jsx` (Contains Signup page code)
    - `Signup.css`
    - `Welcome.jsx` (Contains Welcome page code which appears after Sign-in)
    - `Welcome.css`
  - `App.jsx`
  - `App.css`
  - `index.jsx`
  - `index.css`

Prerequisite for running the project:
1.Node.js
2.React
3.MongoDB Compass and MongoDB Shell

How to setup the application:
1.Clone the repository:

   git clone https://github.com/kchalapathi2002/Login_Page.git
   
2.Navigate to backend:

   cd backend
   
   install required dependencies using npm install:
   
      express,mongoose,cors,dotenv...
      
3.Navigate to frontend

   cd frontend
   
   install required dependencies using npm install:
   
      react-router-dom,axios...
      
4.Run the project:

   cd backend>node index.js
   
   cd frontend>npm start

How to use the application:

-The home page will be opened after running the application which contains two buttons Signup and Signin.

-On clicking Signup button it will be redirect to Signup page and on clicking Signin button it will redirect to Signin page.

-Signup page contain a form after submitting,it will check if user with same Email id already exists, if exists it will show a message User already exists. If Email id not exists in database it will save the credentials and redirect to Home page.

-Signin page also contains a form and after submitting it it will check if the credentials is correct or not, if invalid then it displays a message "User not found" or "Invalid credentials". If credentials are correct it will be redirect to main page.

-main page contains Welcome message along with the user name, Crypto data and Last finalized block of ethereum and a Logout button at top-right cornner. On clicking Logout button the page will be redirect to Home page.

-This is the working of the application.
