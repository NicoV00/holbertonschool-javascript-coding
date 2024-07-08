#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, function (err, response, body) {
  if (err) {
    console.error(err);
  } else {
    const films = JSON.parse(body).results;
    let count = 0;

    films.forEach((film) => {
      const filterCharacters = film.characters.filter((character) =>
        character.includes('18')
      );
      if (filterCharacters.length > 0) {
        count++;
      }
    });

    console.log(count);
  }
});
