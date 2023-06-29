import { ComponentUpdateData } from "../ComponentUpdateData";
import { MetadataKey } from "../../reflect/MetadataKey";

export function Update(option?: { period: number }): MethodDecorator {
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
        Reflect.defineMetadata(MetadataKey.ECSComponentUpdate, new ComponentUpdateData(descriptor.value, option?.period ?? 40), target.constructor)
    }
}