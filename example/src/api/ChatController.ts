import { Logger } from "log4js";
import { Controller } from "../../../src/dispatch/decorators/Controller";
import { RequestMapping } from "../../../src/dispatch/decorators/RequestMapping";
import { Log } from "../../../src/log/decorators/Log";
import { ApiCall } from "tsrpc";
import { ReqSend, ResSend } from "../protocols/chat/PtlSend";
import { server } from "../index";

@Controller('chat')
export class ChatController {

    @Log
    private tsLog: Logger;

    @RequestMapping('Send')
    public async send(call: ApiCall<ReqSend, ResSend>) {
        this.tsLog.info('Send exec')
        if (call.req.content.length === 0) {
            await call.error('Content is empty')
            return;
        }

        let time = new Date();
        await call.succ({
            time: time
        });

        await server.broadcastMsg('chat/Chat', {
            content: call.req.content,
            time: time
        })
    }
}
