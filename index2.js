const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./index');


nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log('Sorry, something went wrong ', error.message);
  })




