import { Controller } from "../../../src/dispatch/decorators/Controller";
import { RequestMapping } from "../../../src/dispatch/decorators/RequestMapping";
import { Log } from "../../../src/log/decorators/Log";
import { Logger } from "log4js";
import { GetUserListDTO } from "../dto/GetUserListDTO";
import { UserListVO } from "../vo/UserListVO";
import { MessageHead } from "../../../src/network/message/MessageHead";

@Controller({route: 'user'})
export class UserController {

    @Log
    private tsLog: Logger;

    @RequestMapping('getUserList')
    public async getUserList(para: GetUserListDTO, head: MessageHead): Promise<UserListVO> {
        this.tsLog.info('getUserList exec', para, head)
        let userListVO = new UserListVO();
        userListVO.id = 1101
        userListVO.name = '王五'
        userListVO.sex = 1
        return userListVO;
    }
}
