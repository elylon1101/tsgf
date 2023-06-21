import { Class } from "./Class";

export interface ClassLoader {
    loadClass(): Class;
}