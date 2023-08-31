import { Message } from "../Message";

export interface Decoder {
    decode(msg: any): Message<any>
}
