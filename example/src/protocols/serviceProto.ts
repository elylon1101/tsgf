import { ServiceProto } from 'tsrpc-proto';
import { MsgChat } from './chat/MsgChat';
import { ReqSend, ResSend } from './chat/PtlSend';

export interface ServiceType {
    api: {
        "chat/Send": {
            req: ReqSend,
            res: ResSend
        }
    },
    msg: {
        "chat/Chat": MsgChat
    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 1,
    "services": [
        {
            "id": 2,
            "name": "chat/Chat",
            "type": "msg"
        },
        {
            "id": 3,
            "name": "chat/Send",
            "type": "api"
        }
    ],
    "types": {
        "chat/MsgChat/MsgChat": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "chat/PtlSend/ReqSend": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "chat/PtlSend/ResSend": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        }
    }
};