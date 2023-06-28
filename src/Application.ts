import { ApplicationContext } from "./ApplicationContext";
import "reflect-metadata";
import { ComponentUpdateData } from "./ecs/ComponentUpdateData";
import { WebSocket } from "./network/websocket/WebSocket";
import { ConsoleLog } from "./log/ConsoleLog";
import { LogLevel } from "./log/LogLevel";

export const all_ecs_update: Map<any, ComponentUpdateData> = new Map()

/**
 * 框架入口
 */
export class Application {

    /**
     * 启动框架
     */
    public static async run(): Promise<any> {
        // 1.创建上下文
        let context: ApplicationContext = ApplicationContext.getIns();
        // 2.配置处理
        // 2.1日志模块
        context.logger = new ConsoleLog().setLevel(LogLevel.debug);
        // 3.启动网络模块
        new WebSocket();
        // 根据需要启动ecs的相关生命周期函数
        setInterval(() => {
            let now = Date.now();
            all_ecs_update.forEach(value => {
                if (value.lastUpdateTimestamp === undefined || now - value.lastUpdateTimestamp >= value.period) {
                    value.lastUpdateTimestamp = now;
                    value.update.call(undefined);
                }
            })
        }, 10)
    }
}