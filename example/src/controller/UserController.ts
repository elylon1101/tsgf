import { Controller } from "../../../src/dispatch/decorators/Controller";
import { RequestMapping } from "../../../src/dispatch/decorators/RequestMapping";

@Controller({route: 'user'})
export class UserController {

    @RequestMapping('getUserList')
    public getUserList() {

    }
}