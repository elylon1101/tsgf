import { ApplicationContext } from "./ApplicationContext";
import "reflect-metadata";
import { WebSocket } from "./network/websocket/WebSocket";
import { ConsoleLog } from "./log/ConsoleLog";
import { LogLevel } from "./log/LogLevel";
import { ComponentUpdateData } from "./ecs/ComponentUpdateData";
import { PathClassLoader } from "./classLoader/PathClassLoader";
import { ControllerData } from "./dispatch/ControllerData";

export const all_ecs_update: Map<any, ComponentUpdateData> = new Map()
export const CONTROLLERS: Map<any, ControllerData[]> = new Map()

/**
 * 框架入口
 */
export class Application {

    /**
     * 启动框架
     */
    public static async run(): Promise<any> {
        // 载入所有代码
        new PathClassLoader().loadAll()
        // 1.创建上下文
        let context: ApplicationContext = ApplicationContext.getIns();
        // 2.配置处理
        context.wsPort = 1101
        // 2.1日志模块
        context.logger = new ConsoleLog().setLevel(LogLevel.debug);
        // 3.启动网络模块
        new WebSocket(context);
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