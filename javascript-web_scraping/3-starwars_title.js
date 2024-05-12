#!/usr/bin/node

const request = require('request');
const url = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

request.get(url, (err, response, body) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`${JSON.parse(body),title}`);
});
