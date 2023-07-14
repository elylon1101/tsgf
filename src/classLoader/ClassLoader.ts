export interface ClassLoader {
    loadClass(path: string | RegExp): void;
}