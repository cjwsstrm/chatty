Chatty
=====================
Chatty is a project for students at Lighthouse Labs. It served to introduce the student to React, babel and websockets.
Chatty is a basic chat room that allow users to send messages that for all user to see. Users can change their names. The server will provide other users of any name changes, and also keep track of how many users are online.

### Usage

```
git clone git@github.com:cjwsstrm/chatty.git
cd chatty
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies for chatty and for chatty_server and start both servers.

```
npm install x2
npm start & node server.js
open http://localhost:3000
```



### Dependencies 

#### Chatty
babel-core
babel-eslint
babel-loader
babel-preset-es2015
babel-preset-react
babel-preset-stage-0
css-loader
eslint
eslint-plugin-react
node-sass
sass-loader
sockjs-client
style-loader
webpack
webpack-dev-server
react
react-dom
ws

####Chatty_server
express
uuid
ws

### Screenshots
![1user](https://github.com/cjwsstrm/chatty/blob/master/docs/Chatty_1users.png?raw=true)
![2users](https://github.com/cjwsstrm/chatty/blob/master/docs/Chatty_2users.png?raw=true)
