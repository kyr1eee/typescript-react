export function add(x: number, y: number) : number {
    return x + y;
}

/**
 * 类型检测
 * 1. 参数类型
 * 2. 返回值类型
 * @param x 
 * @param y 
 */
let myAdd: (num1: number, num2: number) => number = function(x: number, y: number): number { return x + y; }

/**
 * 推断类型
 * 赋值一句一边指定类型, 另一边没有类型, ts编译器自动识别类型
 */
let myAdd1: (x: number, y: number) => number = function(x, y) { return x + y; }

/**
 * 可选参数
 * 默认值要放在必须参数后面
 */
function sleep(hour: string, minute?: string, ): any {
    return '早睡早起';
}

/**
 * 默认参数
 */
function sleep1(hour: string, minute="0"): any {
    return '早睡早起'
}

/**
 * 剩余参数
 */
function show(this: void, ...obj: any[]) { // 所有参数放入数组
    return obj;
}
let show1 = show('hello', 'world', 666, {1: 'a'}, false, null, undefined);

/**
 * 函数重载
 */
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: { suit: string, card: number }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x: any): any {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
pickCard([{suit: 'hello', card: 10}, {suit: 'hello', card: 10}]);
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];