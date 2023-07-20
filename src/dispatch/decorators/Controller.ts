import { CONTROLLERS } from "../../Application";
import { MetadataKey } from "../../reflect/MetadataKey";
import { ControllerDecoratorsType } from "../types";
import { RouteUtil } from "../../util/RouteUtil";
import { ControllerData } from "../ControllerData";
import { RequestMappingData } from "../RequestMappingData";

export function Controller(param?: ControllerDecoratorsType): ClassDecorator {
    return function (target: Function) {
        let path: string = RouteUtil.getRoute(param);
        let requestMapping = Reflect.getMetadata(MetadataKey.RequestMapping, target) as RequestMappingData;
        if (CONTROLLERS.has(path)) {
            let controllerClass = CONTROLLERS.get(path);
            if (!controllerClass) controllerClass = []
            controllerClass.push(new ControllerData(path, requestMapping))
            CONTROLLERS.set(path, controllerClass)
        } else {
            CONTROLLERS.set(path, [new ControllerData(path, requestMapping)])
        }
    }
}