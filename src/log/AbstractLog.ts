import { ILog } from "./ILog";
import { LogLevel } from "./LogLevel";

export abstract class AbstractLog implements ILog {
    private level: number = LogLevel.info;
    debug: (message?: any, ...optionalParams: any[]) => void = this.level <= LogLevel.debug ? console.debug : this.empty;
    error: (message?: any, ...optionalParams: any[]) => void = this.level <= LogLevel.error ? console.error : this.empty;
    info: (message?: any, ...optionalParams: any[]) => void = this.level <= LogLevel.info ? console.info : this.empty;
    log: (message?: any, ...optionalParams: any[]) => void = this.level <= LogLevel.log ? console.log : this.empty;

    empty(): void {
    }

    setLevel(logLevel: LogLevel) {
        this.level = logLevel
        this.debug = this.level <= LogLevel.debug ? console.debug : this.empty;
        this.error = this.level <= LogLevel.error ? console.error : this.empty;
        this.info = this.level <= LogLevel.info ? console.info : this.empty;
        this.log = this.level <= LogLevel.log ? console.log : this.empty;
        return this;
    }
}