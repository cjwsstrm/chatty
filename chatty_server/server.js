const express = require('express');
const SocketServer = require('ws');
const uuidv1 = require('uuid/v1');

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer.Server({ server });

const userSet = new Set();

wss.on('connection', (ws) => {
  userSet.add(ws);                                //part 1/2 of online users counter
  wss.clients.forEach(function each(client) {
    if (client.readyState === SocketServer.OPEN) {
      client.send(JSON.stringify(userSet.size));
    }
  });
  console.log('Client connected');

  let returnMessage = {
    id: uuidv1(),
    username: '',
    content: ''
  };

  ws.on('message', function incoming(message) {       //handler for different types of messages
    const inComingmessage = (JSON.parse(message));
    switch(inComingmessage.type) {
    case 'postMessage':
      returnMessage = {
        type: 'incomingMessage',
        id: uuidv1(),
        username: inComingmessage.username,
        content: inComingmessage.content
      }; 
      break;
    case 'postNotification':
      returnMessage = {
        type: 'incomingNotification',
        id: uuidv1(),
        content: inComingmessage.content
      };
      break;
    default:
      throw new Error("Unknown event type " + inComingmessage.type);
    }
    wss.clients.forEach(function each(client) {
      if (client.readyState === SocketServer.OPEN) {
        client.send(JSON.stringify(returnMessage));
      }
    });
  });
  
  ws.on('close', () => { 
    userSet.delete(ws)                      //part 2/2 of online users counter
    console.log('Client disconnected');
    wss.clients.forEach(function each(client) {
      if (client.readyState === SocketServer.OPEN) {
      client.send(JSON.stringify(userSet.size));
      }
    });
  });
})