import { Message } from "../Message";

export interface Encoder {

    encode(msg: Message<any>): any

}
