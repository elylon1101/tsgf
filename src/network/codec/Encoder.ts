import { Request } from "../Request";

export interface Encoder {

    encode(msg: any): Request

}