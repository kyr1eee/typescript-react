export let name = "枚举";

/**
 * 数字枚举
 */
enum Nums {
    UP,
    DOWN = 100,
    LEFT,
    RIGHT
}
// 自动增长, UP:0, DOWN: 100, LEFT: 101, RIGHT: 102
console.log(Nums.LEFT);

/**
 * 字符串枚举
 */
enum Strings {
    Up = "UP",
    Down = "DOWN"
}
console.log(Strings.Up);

/**
 * 枚举成员: 常量或计算得出的值
 */
enum Test {
    test1 = 1 + 1,
    test2 = 1 << 2,
    test3 = 5 % 3,
    test4 = 666
}

/**
 * 联和枚举
 * 字面量枚举成员
 */
enum Combine {
    IProps,
    lol
}
interface IProps {
    id: number
}
const lol: string = 'lol'