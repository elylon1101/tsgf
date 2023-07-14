import { ILog } from "./log/ILog";
import { ConsoleLog } from "./log/ConsoleLog";
import { Network } from "./network/Network";

/**
 * 框架应用上下文
 */
export class ApplicationContext {

    private static instance: ApplicationContext;

    private _logger: ILog = new ConsoleLog();

    private _wsPort: number = 1101;

    private _netWork: Network = {};

    private constructor() {
    }

    public static getIns() {
        if (!this.instance) {
            this.instance = new ApplicationContext();
        }
        return this.instance;
    }

    get logger(): ILog {
        return this._logger;
    }

    set logger(value: ILog) {
        this._logger = value;
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