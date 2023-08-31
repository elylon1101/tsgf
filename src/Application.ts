import * as log4js from "log4js"
import "reflect-metadata";
import { ApplicationContext } from "./ApplicationContext";
import { PathClassLoader } from "./classLoader/PathClassLoader";
import { ComponentUpdateData } from "./ecs/ComponentUpdateData";
import { WebSocket } from "./network/websocket/WebSocket";
import { JsonEncoder } from "./network/message/codec/JsonEncoder";
import { JsonDecoder } from "./network/message/codec/JsonDecoder";

export const all_ecs_update: Map<any, ComponentUpdateData> = new Map()
export const HANDLERS: Map<string, Function> = new Map()

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

        context.handlers = HANDLERS;
        // 2.配置处理
        context.wsPort = 1101
        // 2.1日志模块
        log4js.configure({
            appenders: {
                console: {type: "console", layout: {type: "pattern", pattern: "%[[%f:%l] [%d] [%p] %c - %] %m%n"}},
                app: {type: "file", filename: "application.log"},
            },
            categories: {
                default: {appenders: ["console"], level: "trace", enableCallStack: true},
                tsgf: {appenders: ["console"], level: "all", enableCallStack: true}
            },

        })
        context.tsgfLogger = log4js.getLogger('tsgf');
        context.logger = log4js.getLogger('default');
        // 初始化编解码器
        context.encoder = new JsonEncoder()
        context.decoder = new JsonDecoder()
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
        // 注册钩子函数
        process.on('exit', (code) => {
            context.logger.info(`About to exit with code: ${code}`)
        });
        // 监听程序关闭
        process.on('SIGINT', () => {
            context.logger.info('接收到 SIGINT 信号，开始优雅停止...');
            process.exit(0);
        });
        process.on('uncaughtException', (e)=>{
            context.logger.error('system error', e)
        })
    }
}
