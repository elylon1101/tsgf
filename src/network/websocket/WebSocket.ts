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
            ws.on('message', async (data) => {
                let sendData = data.toString();
                let encoder = context.encoder.encode(sendData);
                this.log.debug('received', encoder);
                let handler = context.handlers.get(encoder.route);
                let res = {};
                if (handler) {
                    res = await handler(encoder.data);
                    this.log.debug('exec res', res);
                }
                ws.send(context.decoder.decode(res));
            })
        })
        context.netWork = this;
    }
}