import { all_ecs_update } from "../../../index";
import { MetadataKey } from "../../reflect/MetadataKey";


export function Component() {
    console.log('Component装饰器开始装载')
    return function (target: any) {
        console.log('Component装饰器装载中')
        let metadata = Reflect.getMetadata(MetadataKey.ECSComponentUpdate, target);
        all_ecs_update.set(target.constructor.name, metadata)
        console.log('Component装饰器装载完毕')
    }
}