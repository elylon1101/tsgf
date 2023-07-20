import { Logger } from "log4js";
import { WebSocketServer } from 'ws';
import { ApplicationContext } from "../../ApplicationContext";
import { FiLog } from "../../log/decorators/FiLog";
import { Network } from "../Network";

export class WebSocket implements Network {

    @FiLog
    private log: Logger;

    private wss: WebSocketServer;

    constructor(context: ApplicationContext) {
        this.log.info('webSocketServer start')
        this.wss = new WebSocketServer({
            port: context.wsPort
        });
        this.wss.on('connection', (ws) => {
            this.log.info(`webSocketServer started listen port 8080`)
            ws.on('message', (data) => {
                this.log.debug('received: %s', data.toString());
                ws.send('收到恢复 over');
            })
        })
        context.netWork = this;
    }
}