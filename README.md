namaste react notes----------
-> by using context we can avoid props drilling

#redux toolkit
-Install @reduxjs/toolkit and react-redux
-build our store
-connect our store to our app
-create a cart slice
-dispatch an action
-read the data using selector

type of testing 
->unit testing-we test in isolation 
->integration testing-testing the integration of constant
->end to end testing-test to test when user land to page to exit the page(selenium like tools are required)

//lib use to  write test cases
react testing library-its is built on dom testing library,if u create inside npx create react app so it is inbuilt there. 
-> it uses jest javascript testing framework

for installing run
-> npm i -D @testing-library/react
->  npm i -D jest 
-> go to jest site we are using with babel so we need to download certain babel dependancies
-->   npm install --save-dev babel-jest @babel/core @babel/preset-env
after that go to parcel then javascript the search for babel and then create .parcelrc file and configure
->  npm run jest
-> npx jest --init
-> test case need a environment to run for that we uses jsdom
-> npm install --save-dev jest-environment-jsdom

_ _ -dunder

--Install React Testing Library
--Installed jest
--Installed Babel dependencies
--Configure Babel
--Configure Parcel Config file to disable default babel transpilation
Jest - npx jest --init
Install jsdom library
Install @babel/preset-react - to make JSX work in test cases
Include @babel/preset-react inside my babel config
npm i -D @testing-library/jest-dom
