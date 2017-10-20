Chatty
=====================
Chatty is a project for students at Lighthouse Labs. It served to introduce React, babel and websockets. Chatty is a basic chat room type app, that allow users to send messages for all users to see. Users can change their names, and if or when they do, the chatroom will notify all users of the name change. Chatty also has a counter displaying number of current users.

### Usage
Clone the project

```
git clone git@github.com:cjwsstrm/chatty.git
```

Install dependencies and start the servers.
```
cd chatty
npm install
npm start
open another terminal window
cd chatty_server
npm install
node server.js
open http://localhost:3000 in your browser of choice. 
```
### Dependencies 

#### Chatty
- babel-core
- babel-eslint
- babel-loader
- babel-preset-es2015
- babel-preset-react
- babel-preset-stage-0
- css-loader
- eslint
- eslint-plugin-react
- node-sass
- sass-loader
- sockjs-client
- style-loader
- webpack
- webpack-dev-server
- prop-types
- react
- react-dom
- ws

#### Chatty_server
- express
- uuid
- ws

### Screenshots
![1user](https://github.com/cjwsstrm/chatty/blob/master/docs/Chatty_1users.png?raw=true)
![2users](https://github.com/cjwsstrm/chatty/blob/master/docs/Chatty_2users.png?raw=true)
