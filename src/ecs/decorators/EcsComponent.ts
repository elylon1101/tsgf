import { all_ecs_update } from "../../Application";
import { MetadataKey } from "../../reflect/MetadataKey";
import { ComponentUpdateData } from "../ComponentUpdateData";

export function EcsComponent(): ClassDecorator {
    return function (target: Function) {
        let metadata: ComponentUpdateData = Reflect.getMetadata(MetadataKey.ECSComponentUpdate, target);
        all_ecs_update.set(target.constructor.name, metadata)
    }
}