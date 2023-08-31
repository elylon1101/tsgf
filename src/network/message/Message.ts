import { MessageHead } from "./MessageHead";

export interface Message<T> {
    /**
     * 消息头
     */
    head: MessageHead
    /**
     * 消息载体
     */
    payload: T
}
