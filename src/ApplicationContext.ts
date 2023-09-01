import { Logger } from "log4js";

/**
 * 框架应用上下文
 */
export class ApplicationContext {

    private static _instance: ApplicationContext;

    public tsgfLogger: Logger;

    public logger: Logger;

    public wsPort: number = 1101;

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
