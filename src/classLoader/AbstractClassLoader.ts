import { ClassLoader } from "./ClassLoader";
import * as fs from "fs";
import path from "path";

export abstract class AbstractClassLoader implements ClassLoader {

    /**
     * todo 通过自动的路径来加载
     * @param uri 路径
     */
    loadClass(uri: string | RegExp) {

    }

    loadAll(uri?: string) {
        const filePath = path.join(uri ?? process.cwd());
        const files = fs.readdirSync(filePath);
        files.forEach(file => {
            const fullPath = path.join(filePath, file);
            const stats = fs.statSync(fullPath);
            if (stats.isDirectory()) {
                this.loadAll(path.join(filePath, file));
            } else if (stats.isFile() && ['.js', '.ts'].includes(path.extname(file))) {
                require(fullPath);
            }
        });
    }
}