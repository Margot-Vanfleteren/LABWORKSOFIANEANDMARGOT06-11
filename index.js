const fs = require('fs');

const filePath = 'text.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
