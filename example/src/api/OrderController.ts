import { Logger } from "log4js";
import { Controller } from "../../../src/dispatch/decorators/Controller";
import { RequestMapping } from "../../../src/dispatch/decorators/RequestMapping";
import { Log } from "../../../src/log/decorators/Log";

@Controller('order')
export class OrderController {

    @Log
    private tsLog: Logger;

    public test() {
        this.tsLog.info('test')
    }

    @RequestMapping('orderList')
    public getOrderList() {
        this.tsLog.info('getOrderList exec')
    }
}