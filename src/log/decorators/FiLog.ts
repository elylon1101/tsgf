import { ApplicationContext } from "../../ApplicationContext";

export function FiLog(target: any, propertyKey: string) {
    Object.defineProperty(target.constructor.prototype, propertyKey, {
        get: function () {
            return ApplicationContext.getIns().tsgfLogger;
        }
    });
}