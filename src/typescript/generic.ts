export function index(arg: any): any {
    return arg + ''; // 传入数字, 返回字符串
}

/**
 * 泛型, 该函数称为泛型
 * 使返回值的类型与传入参数的类型是相同的
 * 类型变量, 表示类型
 */
function identity<T>(arg: T): T { // 类型变量T捕获传入arg类型, 此时传入类型与返回类型都一致
    return arg;
}
let output1 = identity<string>('oh shit!!!');
let outpu2 = identity('饼干送饭');
let myIdentity1: <T>(arg: T) => T = identity;
let myIdentity2: {<T>(arg: T): T} = identity;
/**
 * T类型数组
 */
function arrayType1<T>(arg: T[]): T[] {
    return arg;
}

function arrayType2<T>(arg: Array<T>): Array<T> {
    return arg;
}
/**
 * 泛型接口
 */
interface TestFunc1 {
    <T>(arg: T): T;
}
interface TestFunc2<T> { // 可指定类型
    (arg: T): T;
}
let myIdentity3: TestFunc1 = identity;
let myIdentity4: TestFunc2<number> = identity;

/**
 * 泛型类, 静态属性无法使用泛型, 因为泛型时根据实例确定的
 */
class GenericClass<T> {
    initialVal: T;
    add: (x: T, y: T) => T;
}
let myGeneric1 = new GenericClass<number>();
myGeneric1.initialVal = 1;
myGeneric1.add(6, 35);

/**
 * 泛型约束
 */
interface Length {
    length: number;
}
function showLen<T extends Length>(arg: T): T {
    console.log(arg.length);
    return arg;
}
// showLen(3); // Error, number doesn't have a .length property

function getProperty<T, K extends keyof T>(obj: T, key: K) { // keyof获取T所有可能的属性
    return obj[key];
}
let x = {a: 1, b: 2, c: 3};
getProperty(x, 'a');
getProperty(x, '666');

/**
 * 泛型 + 类类型
 */
function create<T>(c: {new(): T; }): T {
    return new c();
}