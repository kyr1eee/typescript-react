export let isDone: boolean = false;


/******************************
 * 接口
 */
interface LOLName {
    readonly url?: string;
    name: string;
    size?: number;  
    version?: string;   // 可选属性
    [propName: string]: any;    // 可接收额外属性
}


// 接口类型检测
function showName(lolObj: LOLName) {
    console.log(lolObj.name);
}

showName({size: 1024, name: 'riven', url: 'https://lol.qq.com'});

// 函数返回类型检测
function test1(config: LOLName) : {name: string} {
    return {name: '剑姬'};
}

// 接口不存在该类型, 将报错
test1({name: '剑姬', haha: '???'});
// 1. 绕过检查, 类型断言
test1({name: '剑姬', haha: '???'} as LOLName);
// 2. 添加字符串索引签名, [propsName]: any

/*********************************
 * 函数接口
 */
interface myFunc {
    // 参数名不需要一样， 只需按顺序对应类型
    (num1: number, num2: number): number;   // 函数类型定义
}
let myAdd : myFunc = (a, b) => a + b;

/*********************************
 * 类类型接口 
 */
interface ClockConstructor {
    // 构造函数接口
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    // 实例方法接口
    tick(): any;
}

// 传入构造函数接口, 实例方法接口检测类型
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

/******************************
 * 继承接口
 */
interface Shape {
    color: string;
}

interface PenStroke {
    penLength: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square : Square = { color: '#feaeea', penLength: 100, sideLength: 200 };

/******************************
 * 接口继承类
 */
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() {
        
    }

}

/**********************************
 * 可索引类型, 只支持两种索引签名：字符串和数字
 */
interface Animal {
    readonly [index: number]: number;
}
let animalNums : Animal = [1,2,3];

