const fs = require("fs");
const sharp = require('sharp');

fs.readFile('static/input.jpg', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log(`image = ${data.toString()}`);
   sharp(data)
  .resize(1500, 500, {
    fit: 'outside',
  })
  //.max()
  .extract({ left: 0, top: 128, width: 1500, height: 500 })
  .toBuffer()
  .then( data => {
    fs.writeFile('static/output/output.jpg', data, function(err) {
        if (err) {
            throw err;
        }
        console.log('Saved.');
    });
  })
  .catch( err => console.error(err) );
});
