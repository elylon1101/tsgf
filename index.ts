export const all_ecs_update: Map<any, ComponentUpdateData> = new Map()
import "reflect-metadata";
import { ComponentUpdateData } from "./src/ecs/ComponentUpdateData";


// 处理update装饰器，启动ecs的帧更新
setInterval(() => {
    let now = Date.now();
    all_ecs_update.forEach(value => {
        if (value.lastUpdateTimestamp === undefined || now - value.lastUpdateTimestamp >= value.period) {
            value.lastUpdateTimestamp = now;
            value.update.call(undefined);
        }
    })
}, 10)
console.log('project init')