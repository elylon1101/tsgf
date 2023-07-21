import { Encoder } from "./Encoder";
import { Request } from "../Request";

export class JsonEncoder implements Encoder {
    encode(msg: any): Request {
        let parse = JSON.parse(msg) as Request;
        parse.routes = parse.route.split('/').filter(x => x !== '')
        return parse
    }
}