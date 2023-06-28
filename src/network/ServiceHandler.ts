import { Request } from "./Request";
import { Broadcast } from "./Broadcast";
import { Response } from "./Response";

export interface ServiceHandler {

    request(request: Request): Promise<void>;

    response(response: Response): Promise<void>;

    broadcast(broadcast: Broadcast): Promise<void>;
}