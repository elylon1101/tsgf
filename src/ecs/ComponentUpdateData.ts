export class ComponentUpdateData {

    public update: Function;

    public initTimestamp: number;

    public lastUpdateTimestamp: number | undefined;

    public deltaTime: number | undefined;

    public period: number;

    public target: Function;

    constructor(update: Function, period: number) {
        this.update = update;
        this.period = period;
        this.initTimestamp = new Date().getTime();
    }
}