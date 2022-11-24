const request = require("request");
const fs = require('fs');
const argvs = process.argv[2];
const argvs1 = process.argv[3];


request(argvs, (err,response, body) => {
  if (err) {
    console.log('error', err);
    return;
  }
  fs.writeFile(argvs1 , body, (err) => {
    if (err) {
      console.log("error", err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${argvs1}`);
  });

});





