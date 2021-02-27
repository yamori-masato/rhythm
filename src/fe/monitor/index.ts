import p5 from 'p5'
import sketch from './sketch'
import { io, Socket } from 'socket.io-client'

type Sock = TypedEmitter<Socket, EventsRecord.MonitorEventsFromServer, EventsRecord.MonitorEventsFromClient>
const sock: Sock = io('/monitor')

new p5(sketch(sock))