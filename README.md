# CryptoWebsite with user authentication

File structure defining important files:

## Backend
- **Apis** (Contains API's required for the website)
  - **functions**
    - `Finalizedblock.js` (function used to get Finalizedblock)
    - `fromCoinGecko.js` (function used to get Crypto data)
    - `Signinauth.js` (function used to authenticate Signin data)
    - `Signupauth.js` (function used to authenticate Signup data)
  - `Cryptodata.js` (Cryptodata  route)
  - `Latestblock.js`(Latestblock  route) 
  - `Signin.js` (Signin  route)
  - `Signup.js` (Signup route)
- **mongoose** (Contains database interactions)
  - `cryptoModel.js` (used for creating coin data schema and interacting with that) 
  - `dbconnect.js` (used for creating and connecting to database)
  - `timeModel.js` (used for creating timestamp schema and interacting with that)
  - `userModel.js` (used for creating user schema and interacting with that)
- `index.js` (used to connect frontend with backend)

## Frontend
- **src**
  - **components** (Contains components of the frontend along with CSS files)
    - `background3.jpg` (Background image) 
    - `CryptoData.jsx` (Contains main page code which appears after Sign-in)
    - `CryptoData.css`
    - `eachCoin.jsx` (This component is used in CryptoData.jsx to show each coin data)
    - `eachCoin.css` 
    - `Home.jsx` (Contains Home page code)
    - `Home.css`
    - `Signin.jsx` (Contains Sign-in page code)
    - `Signin.css`
    - `Signup.jsx` (Contains Signup page code)
    - `Signup.css`
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

    git clone https://github.com/kchalapathi2002/CryptoWebsite.git
   
2.Navigate to backend:

    cd backend
   
install required dependencies using npm install:
   
    express,mongoose,cors,web3,dotenv...
      
3.Navigate to frontend

    cd frontend
   
install required dependencies using npm install:
   
    react-router-dom,axios,lodash...
      
4.Run the project:

cd backend>

    node index.js
   
cd frontend>

    npm start

How to use the application:

-The home page will be opened after running the application which contains two buttons Signup and Signin.

-On clicking Signup button it will be redirect to Signup page and on clicking Signin button it will redirect to Signin page.

-Signup page contain a form after submitting,it will check if user with same Email id already exists, if exists it will show a message User already exists. If Email id not exists in database it will save the credentials and redirect to Home page.

-Signin page also contains a form and after submitting it it will check if the credentials is correct or not, if invalid then it displays a message "User not found" or "Invalid credentials". If credentials are correct it will be redirect to main page.

-main page contains Welcome message along with the user name, Crypto data and Last finalized block of ethereum and a Logout button at top-right cornner. On clicking Logout button the page will be redirect to Home page.

-If data in the main page is from Coingecko API then main page will show live if it is from our database than the main page will show last updated time.

-This is the working of the application.
