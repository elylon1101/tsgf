import { Decoder } from "./Decoder";
import { Message } from "../Message";
import WebSocket from "ws/index";

export class JsonDecoder implements Decoder {
    decode(msg: WebSocket.RawData): Message<any> {
        return JSON.parse(msg.toString()) as Message<any>
    }
}
