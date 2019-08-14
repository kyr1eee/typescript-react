export let name = '类型推断';
/**
 * 没有指出类型, 类型推论将帮助提供类型
 */
let obj = {1: 1};
let x = [1, 'a', null, undefined, [1, null], true];

/**
 * 上下文类型
 */
// TypeScript类型检查器使用Window.onmousedown函数的类型来推断右边函数表达式的类型
window.onmousedown = function(mouseEvent: any) {
    console.log(mouseEvent.button);  //<- Now, no error is given
};