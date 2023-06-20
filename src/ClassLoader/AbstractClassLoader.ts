import { ClassLoader } from "./ClassLoader";
import { Class } from "./Class";

export abstract class AbstractClassLoader implements ClassLoader {
    loadClass(): Class {
        return new Class('Test');
    }
}