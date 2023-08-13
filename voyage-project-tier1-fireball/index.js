const fs = require('fs');

fs.readFile('utils/meteorites.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    const searchName = 'Aachen';
    const meteorite = jsonData.find(item => item.name === searchName);

    if (meteorite) {
      console.log('Meteorite found:', meteorite);
    } else {
      console.log('Meteorite not found.');
    }
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
