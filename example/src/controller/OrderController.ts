import { Controller } from "../../../src/dispatch/decorators/Controller";
import { RequestMapping } from "../../../src/dispatch/decorators/RequestMapping";

@Controller('order')
export class OrderController {

    @RequestMapping('orderList')
    public getOrderList(){

    }
}