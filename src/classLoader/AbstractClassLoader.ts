import { extname, join } from "path";
import { ClassLoader } from "./ClassLoader";
import { readdirSync, statSync } from "fs";

export abstract class AbstractClassLoader implements ClassLoader {

    /**
     * todo 通过自动的路径来加载
     * @param uri 路径
     */
    loadClass(uri: string | RegExp) {

    }

    loadAll(uri?: string) {
        const filePath = join(uri ?? process.cwd());
        const files = readdirSync(filePath);
        files.forEach(file => {
            const fullPath = join(filePath, file);
            const stats = statSync(fullPath);
            if (stats.isDirectory()) {
                this.loadAll(join(filePath, file));
            } else if (stats.isFile() && ['.js', '.ts'].includes(extname(file))) {
                try {
                    require(fullPath);
                } catch (e) {
                }
            }
        });
    }
}