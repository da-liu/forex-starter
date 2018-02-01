This is a starter pack for a React forex app. It is meant as a practice assignment for someone learning the basics of React. It contains a set of tests that checks for the following functionalities:

1. A span with the id `rate` that displays an initial USD to CAD rate of `1.29`
2. Two input fields with the names `USD` and `CAD` respectively.
3. Typing whole numbers into either of the two inputs triggers the other input to update with the equivalent rate.
4. App updates the rate after initial mounting using the API endpoint 'https://api.fixer.io/latest?base=USD&symbols=CAD'

To begin:

1. clone the app to the local drive: `git clone https://github.com/da-liu/forex-starter.git`
2. install dependencies: `cd forex-starter && npm install`
3. start app `npm start` in one terminal, and watch for test in another terminal `npm test`
4. edit `App.js` to build the required features and pass all the tests
5. submit your app to [TODO: email or slack channel](http://example.com) to get an example solution
