import { Decoder } from "./Decoder";

export class JsonDecoder implements Decoder {
    decode(msg: any): string {
        return JSON.stringify(msg)
    }
}