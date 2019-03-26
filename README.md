# React Stock App

This project was built with React, and uses Axios along with the Alpha Vantage API to provide stock prices.

It is a work-in-progress, features to come include:
- The ability to remove stock data or error messages
- The ability to change the time intervals (duration between price points, AV provides 1min, 5min, 15min, 30min, 60min)
- The ability to change the overall time frame (currently defaults to intraday, AV provides intraday, daily, weekly, monthly, adjusted for distributions such as dividends or non-adjusted)
- Add an API to create charts out of the data provided rather than simply printing text
- Nicer Styling


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

<!--
### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. -->

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
