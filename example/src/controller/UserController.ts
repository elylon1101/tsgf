import { Controller } from "../../../src/dispatch/decorators/Controller";
import { RequestMapping } from "../../../src/dispatch/decorators/RequestMapping";
import { Log } from "../../../src/log/decorators/Log";
import { Logger } from "log4js";
import { GetUserListDTO } from "../dto/GetUserListDTO";
import { UserListVO } from "../vo/UserListVO";

@Controller({route: 'user'})
export class UserController {

    @Log
    private tsLog: Logger;

    @RequestMapping('getUserList')
    public async getUserList(para: GetUserListDTO): Promise<UserListVO> {
        // this.tsLog.info('getUserList exec')
        let userListVO = new UserListVO();
        userListVO.id = 1101
        userListVO.name = '王五'
        userListVO.sex = 1
        return userListVO;
    }
}