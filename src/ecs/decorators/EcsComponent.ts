import { MetadataKey } from "../../reflect/MetadataKey";
import { all_ecs_update } from "../../Application";

export function EcsComponent(): ClassDecorator {
    return function (target: Function) {
        let metadata = Reflect.getMetadata(MetadataKey.ECSComponentUpdate, target);
        all_ecs_update.set(target.constructor.name, metadata)
    }
}