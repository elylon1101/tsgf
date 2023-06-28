export interface ILog {
    debug(message?: any, ...optionalParams: any[]): void;

    error(message?: any, ...optionalParams: any[]): void;

    info(message?: any, ...optionalParams: any[]): void;

    log(message?: any, ...optionalParams: any[]): void;

    empty(): void
}