import { WebSocketServer } from 'ws';
import { ApplicationContext } from "../../ApplicationContext";
import { ILog } from "../../log/ILog";

export class WebSocket {

    private log: ILog = ApplicationContext.getIns().logger;

    private wss: WebSocketServer;

    constructor() {
        this.log.debug('webSocketServer start')
        this.wss = new WebSocketServer({
            port: 8080
        });
        this.wss.on('connection', (ws) => {
            this.log.debug(`webSocketServer started listen port 8080`)
            ws.on('message', (data) => {
                this.log.debug('received: %s', data.toString());
                ws.send('收到恢复 over');
            })
        })
    }
}