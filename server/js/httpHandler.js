const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messages = require('./messageQueue');


// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.url === '/') {
    res.writeHead(200, headers);
    if (req.method === 'GET') {
    //define a random directional response
    // var commands = ['up', 'down', 'left', 'right'];
    // //return a random direction
    // res.end(commands[Math.floor(Math.random() * commands.length)]);
    // // res.end('up');
      res.end(messages.dequeue())

    }
    res.end();
    next(); // invoke next() at the end of a request to help with testing!
  } else if (req.url === '/background.jpg') {
    res.writeHead(200, headers);
    if (req.method === 'GET') {
      var image = fs.readFile('background.jpg', (err, image) => {
      if (err) { throw err; }
      console.log(image);
      res.end(image);
      })
    }
    // if (req.method === 'POST') {

    // }
    //res.end(image);
    next();
    }
    else {
    res.writeHead(404, headers);
    res.end();
    next();
  }
};
