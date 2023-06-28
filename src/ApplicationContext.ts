import { ILog } from "./log/ILog";
import { ConsoleLog } from "./log/ConsoleLog";

/**
 * 框架应用上下文
 */
export class ApplicationContext {
    private static instance: ApplicationContext;

    private constructor() {
    }

    private _logger: ILog = new ConsoleLog();

    get logger(): ILog {
        return this._logger;
    }

    set logger(value: ILog) {
        this._logger = value;
    }

    public static getIns() {
        if (!this.instance) {
            this.instance = new ApplicationContext();
        }
        return this.instance;
    }

}