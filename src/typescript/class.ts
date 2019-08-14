import React from 'react';
export let name = "类";
/**
 * 类
 */
export class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}
let greeter = new Greeter('world');

/**
 * 继承
 */
class Animal {
    move(distance: number = 0) {
        console.log(`Animal moved ${distance}m.`);
    }
}

class Dog extends Animal {
    test() {
        console.log('Dog! Dog!');
    }
}

const dog = new Dog();
dog.test();
dog.move(10)
dog.test();

/**
 * 公共， 私有与受保护的修饰符
 */

/**
 * public(默认): 公共变量.
 * private: 私有变量, 无法被声明它的类的外部访问
 * protected: 可在派生类中访问
 * readonly: 只读, 声明时需要初始化
 */

 /**
  * 静态属性static, 类本身属性, 实例无法访问
  */
class Test {
    static color: string = '#eeaeab';
    private width: number;
    protected area: number;
    constructor(public height: number = 50) {
        this.width = 100;
        this.area = this.width * height;
    }
}

/**
 * 抽象类
 */
abstract class About {
    abstract init(): void;
    move(): void {
        console.log('move move move');
    }
}

class ExtendAbout extends About {
    animal: string = '';
    constructor(num: number = 0) { // 构造函数
        super();
        this.init();
    }
    init() { // 抽象类的方法的具体实现
        this.animal = 'cat';
    }
}
let t: ExtendAbout; // t类型为ExtendAbout类
t = new ExtendAbout(1);

/**
 * 类作为接口使用
 */
class Point {
    x: number = 0;
    y: number = 0;
}

interface Point3d extends Point {
    z: number;
}
let point3d: Point3d = { x: 43, y: 6, z: 35 }

/**
 * react
 */
interface IProps {}
// IProps检测props, any检测state
class A extends React.Component<IProps, any> {
}
