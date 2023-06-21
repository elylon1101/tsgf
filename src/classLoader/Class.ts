import { Type } from "./Type";

export class Class implements Type {

    constructor(private name: string) {

    }

    getTypeName(): string {
        return this.name;
    }
}