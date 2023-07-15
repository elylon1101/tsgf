import { ControllerDecoratorsType, RequestMappingDecoratorsType } from "../dispatch/types";

export class RouteUtil {
    public static getRoute(param?: RequestMappingDecoratorsType | ControllerDecoratorsType): string {
        let path: string = '';
        if (param) {
            if (typeof param === 'string') {
                path = param.toString();
            }
            if (typeof param === 'object' && param.route) {
                path = param.route
            }
        }
        return path
    }
}