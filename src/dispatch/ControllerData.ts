import { RequestMappingData } from "./RequestMappingData";

export class ControllerData {

    constructor(private path: string, private handle: RequestMappingData) {
    }
}