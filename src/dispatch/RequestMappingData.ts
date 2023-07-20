export class RequestMappingData {

    public path: string;

    public method: Function;

    constructor(path: string, method: Function) {
        this.path = path;
        this.method = method;
    }
}