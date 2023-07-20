import { MetadataKey } from "../../reflect/MetadataKey";
import { RequestMappingData } from "../RequestMappingData";
import { RequestMappingDecoratorsType } from "../types";
import { RouteUtil } from "../../util/RouteUtil";

export function RequestMapping(param?: RequestMappingDecoratorsType): MethodDecorator {
    return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        if (originalMethod.constructor.name === 'AsyncFunction') {
            descriptor.value = async function (...args: any[]) {
                return await originalMethod.apply(this, args)
            }
        } else {
            descriptor.value = function (...args: any[]) {
                return originalMethod.apply(this, args)
            }
        }
        Reflect.defineMetadata(MetadataKey.RequestMapping, new RequestMappingData(RouteUtil.getRoute(param), descriptor.value), target.constructor)
    }
}