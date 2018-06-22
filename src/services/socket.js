import openSocket from 'socket.io-client'
const  socket = openSocket(process.env.REACT_APP_SOCKET)

export function SubscribeToTimer(callback){
  socket.on('time', timestamp => callback(timestamp))
  socket.emit('subscribeToTimer', 1000)
}
