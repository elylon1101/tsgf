export interface MessageHead {
    /**
     * 消息ID
     */
    id: number
    /**
     * 是否进行广播
     */
    broadcast?: boolean
    /**
     * 消息路由地址
     */
    route: string
}
