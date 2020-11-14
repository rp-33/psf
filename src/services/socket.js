import SocketIOClient from 'socket.io-client';
import configuration from '../configuration';

let {server} = configuration;

const socket = SocketIOClient(server, {
    reconnectionDelay: 500,
    reconnection: true,
    reconnectionAttemps: 10,
    agent: false,
    upgrade: false,
    rejectUnauthorized: false
}); 

export default socket;
