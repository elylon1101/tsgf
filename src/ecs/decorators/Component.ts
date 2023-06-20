export function Component() {
    console.log('Component装饰器开始装载')
    return function (target: any) {
        console.log('Component装饰器装载中')
        console.log('Component装饰器装载完毕')
    }
}