#!/usr/bin/node

const fs = require('fs');
const path = process.argv[2];

fs.readFile(path, 'utf-8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});
