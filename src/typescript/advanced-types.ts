import { string, object } from "prop-types";
import axios from 'axios';
import url from './url';
export let name = "高级类型";

/**
 * 交叉类型
 * 将多个类型合并为一个类型
 * Person & Serializable & Loggable同时是 Person 和 Serializable 和 Loggable。 就是说这个类型的对象同时拥有了这三种类型的成员。
 */
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for(let key in first) {
        (<any>result)[key] = (<any>first)[key];
    }
    for(let key in second) {
        (<any>result)[key] = (<any>second)[key];
    }
    return result;
}

/**
 * 联和类型
 * number | string | boolean表示一个值可以是 number， string，或 boolean。
 */

/*

interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
}

let pet = getSmallPet();

// 类型保护
if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
*/

// typeof 类型保护
function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

// instanceof 类型保护


// 类型别名
type Name = string;
type ret = object;
function deal(n: Name): ret {
    return {
        Name: 1
    }
}

// 接口 与 类型别名区别
/**
 * 1. 接口可继承
 * 2. 类型别名是字面量
 */

/**
 * 可辨识联合
 * 1. kind属性为可辨识的特征
 */
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}