import { CONTROLLERS } from "../../Application";

export function Controller(param?: { route: string } | string): ClassDecorator {
    return function (target: Function) {
        let path: string = '';
        if (param) {
            if (typeof param === 'string') {
                path = param.toString();
            }
            if (typeof param === 'object' && param.route) {
                path = param.route
            }
        }
        if (CONTROLLERS.has(path)) {
            let controllerClass = CONTROLLERS.get(path);
            if (!controllerClass) controllerClass = []
            controllerClass.push(target)
            CONTROLLERS.set(path, controllerClass)
        } else {
            CONTROLLERS.set(path, [target])
        }
    }
}