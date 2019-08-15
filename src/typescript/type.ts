export let type = "类型";
/**
 * 环境声明
 * 允许使用现有的JavaScript库
 * declare: 试图表诉一个其他地方已经存在的代码
 */
declare let path: any;
/**
 * 类型断言
 */
// 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。
let someStr: any = 'hello world';
let strLength: number = (someStr as string).length;

/**
 * boolean
 */
let isDone: boolean = true; // 布尔值

/**
 * number
 */
let num1: number = 6; // 整数
let num2: number = 0xfff; // 十六进制
let num3: number = 0b1010; // 二进制
let num4: number = 0o744; // 八进制

/**
 * string
 */
let name: string = 'father';
let word: string = `Hello, I am your ${name}.`;

/**
 * Array
 */
let listNum: number[] = [1, 2, 3]; // 数字类型元素
let listStr: string[] = ['a', 'b', 'c']; // 字符串类型元素
let listArr: Array<number> = [1, 2, 3]; // 数组泛型, Array<元素类型>

/**
 * Tuple
 */
let x: [string, number] = ['a', 1]; // 顺序必须与类型定义一致
// x[3] = 'world'; // 联和类型
// x[6] = 1;

/**
 * enum
 */
// 默认情况从0开始编号, Red = 0, Green = 1, Blue = 2, 可手动修改
enum Color { Red = 100, Green, Blue }
let c: Color = Color.Green;
let num: number = c; // 101
let colorName: string = Color[101] // 'Green'

/**
 * any
 */
// 任意类型, 不用检查直接通过编译阶段的检查
let val: any = 1;
val = '1';
val = [1];
let anyList: any[] = [1, true, 'free'];

/**
 * void
 */
let nothing: void = undefined;

/**
 * null, undefined
 */
let null1: null = null;
let undefined1: undefined = undefined;

/**
 * never, 黄金镇魂曲
 */
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

/**
 * object
 */
declare function create(obj: object | null): void;
create({props: 1});

/**
 * 字面量类型
 */
function JOJO(arg: 1): 'JOJO， 这也在你的计划之中吗' {
    return 'JOJO， 这也在你的计划之中吗' 
}
type obj = {a: number, b: string}

// 以下为test

declare var window: Window;

type Record<K extends keyof any, T> = {
    [P in K]: T;
};

interface T1 {};

type RecordT1 = Record<'Test', T1>;
var a: RecordT1 = {Test: 1};

type Readonly<T> = { readonly [P in keyof T]: T[P] };