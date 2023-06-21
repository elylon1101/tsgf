import { MetadataKey } from "../../reflect/MetadataKey";
import { all_ecs_update } from "../../Application";


export function Component(): ClassDecorator {
    console.log('Component装饰器开始装载')
    return function (target: Function) {
        console.log('Component装饰器装载中')
        let metadata = Reflect.getMetadata(MetadataKey.ECSComponentUpdate, target);
        all_ecs_update.set(target.constructor.name, metadata)
        console.log('Component装饰器装载完毕')
    }
}