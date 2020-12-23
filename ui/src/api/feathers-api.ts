import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import { BAPServiceTypes } from './api-types'

const apiTransport = process.env.VUE_APP_TRANSPORT || 'rest'
const apiURL = process.env.VUE_APP_API_URL || 'http://localhost:3030'
if (!apiURL) {
  throw new Error('apiURL not found')
}

const client = feathers<BAPServiceTypes>()

if (apiTransport === 'rest') {
  const restClient = rest(apiURL)
  client.configure(restClient.fetch(window.fetch))
} else if (apiTransport === 'websocket') {
  // https://stackoverflow.com/questions/64813213/getting-error-while-calling-io-in-socket-io-client-angular-8
  const socket = io(apiURL)
  client.configure(socketio(socket))
}

client.configure(auth({
  storageKey: 'auth',
}))

console.log('registering feathers api at:', apiURL)

export default client
