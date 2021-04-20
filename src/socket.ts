import io from 'socket.io-client';
const socket: SocketIOClient.Socket = io.connect(
    `${process.env.SOCKET_SERVER_URL}`
);
export default socket;
