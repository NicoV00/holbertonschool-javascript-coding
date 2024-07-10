#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }
  const cou = JSON.parse(body);
  const tasc = {};
  cou.forEach((tas) => {
    if (tas.completed) {
      tasc[tas.userId] = (tasc[tas.userId] || 0) + 1;
    }
  });
  console.log(tasc);
});
