import { Logger } from "log4js";
import { WebSocketServer } from 'ws';
import { ApplicationContext } from "../../ApplicationContext";
import { FiLog } from "../../log/decorators/FiLog";
import { Network } from "../Network";
import { Message } from "../message/Message";

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
                this.log.debug('received', data);
                let encoder = context.decoder.decode(data);
                this.log.debug('received decode', encoder);
                let handler = context.handlers.get(encoder.head.route);
                let res: Message<any> = {
                    head: {
                        id: 1,
                        route: ''
                    }, payload: undefined
                };
                if (handler) {
                    res.payload = await handler(encoder.payload, encoder.head);
                    this.log.debug('exec res', res);
                }
                ws.send(context.encoder.encode(res));
            })
        })
        context.netWork = this;
    }
}
