import { CONTROLLERS } from "../../Application";
import { MetadataKey } from "../../reflect/MetadataKey";
import { ControllerDecoratorsType } from "../types";
import { RouteUtil } from "../../util/RouteUtil";
import { ControllerData } from "../ControllerData";

export function Controller(param?: ControllerDecoratorsType): ClassDecorator {
    return function (target: Function) {
        let path: string = RouteUtil.getRoute(param);
        let requestMapping = Reflect.getMetadata(MetadataKey.RequestMapping, target);
        if (CONTROLLERS.has(path)) {
            let controllerClass = CONTROLLERS.get(path);
            if (!controllerClass) controllerClass = []
            controllerClass.push(new ControllerData(path, target, requestMapping))
            CONTROLLERS.set(path, controllerClass)
        } else {
            CONTROLLERS.set(path, [new ControllerData(path, target, requestMapping)])
        }
    }
}