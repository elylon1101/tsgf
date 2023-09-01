import { HANDLERS } from "../../Application";
import { MetadataKey } from "../../reflect/MetadataKey";
import { ControllerDecoratorsType } from "../types";
import { RouteUtil } from "../../util/RouteUtil";
import { RequestMappingData } from "../RequestMappingData";

export function Controller(param?: ControllerDecoratorsType): ClassDecorator {
    return function (target: Function) {
        let path: string = RouteUtil.getRoute(param);
        let requestMapping = Reflect.getMetadata(MetadataKey.RequestMapping, target) as RequestMappingData;
        if (HANDLERS.has(path)) {
            throw Error(`${path} repeat`)
        }
        let route = path ? path + '/' + requestMapping.path : requestMapping.path
        HANDLERS.set(route, requestMapping.method)
    }
}
