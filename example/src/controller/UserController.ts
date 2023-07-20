import { Controller } from "../../../src/dispatch/decorators/Controller";
import { RequestMapping } from "../../../src/dispatch/decorators/RequestMapping";
import { Log } from "../../../src/log/decorators/Log";
import { Logger } from "log4js";

@Controller({route: 'user'})
export class UserController {

    @Log
    private tsLog: Logger;

    @RequestMapping('getUserList')
    public getUserList() {
        this.tsLog.info('getUserList exec')
    }
}