import { ApplicationContext } from "../../ApplicationContext";

export function Log(target: any, propertyKey: string) {
    Object.defineProperty(target.constructor.prototype, propertyKey, {
        get: function () {
            return ApplicationContext.getIns().logger;
        }
    });
}