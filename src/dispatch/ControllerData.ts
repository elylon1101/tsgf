import { RequestMappingData } from "./RequestMappingData";

export class ControllerData {

    path: string
    handle: RequestMappingData

    constructor(path: string, handle: RequestMappingData) {
        this.path = path
        this.handle = handle
    }
}