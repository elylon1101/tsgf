import { Encoder } from "./Encoder";

export class JsonEncoder implements Encoder {
    encode(msg: any): string {
        return JSON.stringify(msg)
    }
}
