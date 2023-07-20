import { Logger } from "log4js";
import { Network } from "./network/Network";

/**
 * 框架应用上下文
 */
export class ApplicationContext {

    private static _instance: ApplicationContext;

    public tsgfLogger: Logger;

    public logger: Logger;

    private _wsPort: number = 1101;

    private _netWork: Network = {};

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

    get wsPort(): number {
        return this._wsPort;
    }

    set wsPort(value: number) {
        this._wsPort = value;
    }

    get netWork(): Network {
        return this._netWork;
    }

    set netWork(value: Network) {
        this._netWork = value;
    }
}