import { all_ecs_update } from "../../index";

export function Update(option?: { period: number }) {
    console.log('Update装饰器开始装载')
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('Update装饰器装载中')
        const originalMethod = descriptor.value;
        if (originalMethod.constructor.name === 'AsyncFunction') {
            descriptor.value = async function (...args: any[]) {
                console.log('Update执行前')
                const result = await originalMethod.apply(this, args);
                console.log('Update执行后')
                return result
            }
        } else {
            descriptor.value = function (...args: any[]) {
                console.log('Update执行前')
                const result = originalMethod.apply(this, args);
                console.log('Update执行后')
                return result
            }
        }
        all_ecs_update.set(target.constructor.name, descriptor.value)
        console.log('Update装饰器装载完毕')
    }
}