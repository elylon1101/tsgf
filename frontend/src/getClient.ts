import { WsClient } from "tsrpc-browser";
import { serviceProto, ServiceType } from "./shared/serviceProto";

export function getClient(): WsClient<ServiceType> {
    return new WsClient(serviceProto, {
        server: "ws://127.0.0.1:3001",
        json: true,
        logger: console,
    })
}
