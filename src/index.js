import app from "./app";
import { Server as WebsocketServer } from 'socket.io';
import http from 'http';

import { connectDb } from "./db";

connectDb();

const server = http.createServer(app);
const httpServer = server.listen(3000);
const io = new WebsocketServer(httpServer);

// verify connection to socket.io
// http://localhost:3000/socket.io/socket.io.js

console.log("server is runnign on port 3000");