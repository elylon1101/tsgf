import { Logger } from "log4js";
import { Network } from "./network/Network";
import { Decoder } from "./network/message/codec/Decoder";
import { Encoder } from "./network/message/codec/Encoder";

/**
 * 框架应用上下文
 */
export class ApplicationContext {

    private static _instance: ApplicationContext;

    public tsgfLogger: Logger;

    public logger: Logger;

    public wsPort: number = 1101;

    public netWork: Network;

    public decoder: Decoder;

    public encoder: Encoder;

    public handlers: Map<any, Function>;

    private constructor() {
    }

    public static getIns() {
        if (!this._instance) {
            this._instance = new ApplicationContext();
        }
        return this._instance;
    }

    static get instance(): ApplicationContext {
        return this._instance;
    }

    static set instance(value: ApplicationContext) {
        this._instance = value;
    }

}
