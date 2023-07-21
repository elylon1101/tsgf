import { Response } from "../Response";

export interface Decoder {
    decode(msg: any): string
}