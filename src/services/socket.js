import openSocket from 'socket.io-client'
const  socket = openSocket(process.env.REACT_APP_SOCKET)

export function SubscribeToKyc(cb){
  socket.on('kyc_1', utut => cb(utut))
//socket.emit('subscribeToTimer', 1000)
}
