/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        type: 'input',
        name: 'url',
        message: 'Enter a URL to generate a QR Ccode:',
        validate: (input) => input ? true : 'URL cannot be empty!'
    }
  ])
  .then((answers) => {
    var url = answers.url;

    var qr_png = qr.image(url, {type: 'png'});
    var qr_filename = 'qr_code.png';

    qr_png.pipe(fs.createWriteStream(qr_filename));
    console.log(`QR code saved as ${qr_filename}`);

    fs.writeFile('./URL.txt', url, (err) => {
        if (err) {
            console.error('Error saving the URL:', err);
        } else {
            console.log('User URL saved to URL.txt')
        }
    });
  })
  .catch((error) => {
    console.error('An error occured:', error);
  });