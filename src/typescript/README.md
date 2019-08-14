# TypeScript  
[深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/project/compilationContext.html#%E5%9F%BA%E7%A1%80)

## tsconfig.json  
[详细配置](https://jkchao.github.io/typescript-book-chinese/project/compilationContext.html#tsconfig-json)

## 基础概念
### 类型断言
```
let a = 1;
let b = '1';
b = a as any;
```
### 类型推断
```
let a = true; // 推断为布尔类型
```
### 类型别名
```
type obj = {a: number, b: string}
```
### 类型保护
```
// typeof
function doSome(x: number | string) {
  if (typeof x === 'string') {
    console.log(x.substr(1)); // ok
  }
  x.substr(1); // Error: 无法保证 `x` 是 `string` 类型
}

// instanceof
function doSome(x: object | number) {
  if (x instanceof object) {
    console.log(x[id]); // ok
  }
  x[id]; // Error: 无法保证 `x` 是 `object` 类型
}

// in, 检查一个对象上是否存在一个属性

// 字面量类型保护

// 自定义类型保护
```
### 联和类型
```
let a: string | number = 1;
```
### 交叉类型
```
function test<T, U>(T: a, U: b) : T & U { ... }
```
### 字面量类型
```
let foo: 'Hello World';
type CouponType = 1 | 2 | 3;
```
### 环境声明
```
// global.d.ts
declare type JQuery = any; // declare: 试图表述一个其他地方已经存在的代码
declare var $: JQuery;

declare module 'jquery';

declare module '*.html';

declare module '*.css';

```
### lib.d.ts
```
/**
* lib.d.ts
* 包含了 JavaScript 运行时以及 DOM 中存在各种常见的环境声明。
*/

// tsconfig.json 中指定选项 noLib: true, 从上下文排除改文件
const foo = 123;
const bar = foo.toString(); // Error: 属性 toString 不存在类型 number 上
```

## TIPS
### 泛型 + axios
```
// 请求接口数据
export interface ResponseData<T = any> {
  /**
   * 状态码
   * @type { number }
   */
  code: number;

  /**
   * 数据
   * @type { T }
   */
  result: T;

  /**
   * 消息
   * @type { string }
   */
  message: string;
}

// 在 axios.ts 文件中对 axios 进行了处理，例如添加通用配置、拦截器等
import Ax from './axios';

import { ResponseData } from './interface.ts';

export function getUser<T>() {
  return Ax.get<ResponseData<T>>('/somepath')
    .then(res => res.data)
    .catch(err => console.error(err));
}

interface User {
  name: string;
  age: number;
}

async function test() {
  // user 被推断出为
  // {
  //  code: number,
  //  result: { name: string, age: number },
  //  message: string
  // }
  const user = await getUser<User>();
}
```
### 名义化类型
```
type Id<T extends string> = {
  type: T;
  value: string;
}

type MyId = Id<'me'>
type UId = Id<'u'>
```
### keyof
```
interface iPeople {
  name: string;
  age: number
}

type T = keyof iPeople // -> "name" | "age"
```

### in
```
type Keys = "a" | "b"
type Obj =  {
  [p in Keys]: any
} // -> { a: any, b: any }
```