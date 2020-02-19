const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("didn't work, sorry bro. Error = " , error);
    return;
  }

  console.log('success, huzzah! Your IP is:' , ip);
});