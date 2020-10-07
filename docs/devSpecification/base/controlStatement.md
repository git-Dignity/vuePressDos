# 控制语句
---

> 红色 <font color=#FF0000 >*</font> 代表强制，必须遵循！

### ControllerStatement

* <font color=#FF0000 >*</font> 在一个 switch 块内，每个 case 要么通过 continue/break/return 等来终止，要么注释说明程序将继续执行到哪一个 case 为止；在一个 switch 块内，都必须包含一个 default语句并且放在最后，即使它什么代码也没有。
> <font color=#977D06 >说明：</font> 注意 break 是退出 switch 语句块，而 return 是退出方法体。

* <font color=#FF0000 >*</font> 当 switch 括号内的变量类型为 String 并且此变量为外部参数时，必须先进行 null判断。

```java
* 反例： 如下的代码输出是什么？
public class SwitchString {
    public static void main(String[] args) {
        method(null);
    }
    public static void method(String param) {
        switch (param) {
        // 肯定不是进入这里
        case "sth":
            System.out.println("it's sth");
            break;
        // 也不是进入这里
        case "null":
            System.out.println("it's null");
            break;
        // 也不是进入这里
        default:
            System.out.println("default");
        }
    } 
}
```

* <font color=#FF0000 >*</font> 在 if/else/for/while/do 语句中必须使用大括号
> <font color=#977D06 >说明：</font> 即使只有一行代码，也禁止不采用大括号的编码方式：if (condition) statements;

* <font color=#FF0000 >*</font> 在高并发场景中，避免使用”等于”判断作为中断或退出的条件。
> <font color=#977D06 >说明：</font> 如果并发控制没有处理好，容易产生等值判断被“击穿”的情况，使用大于或小于的区间判断条件来代替。

```javascript
* 反例： 判断剩余奖品数量等于 0 时，终止发放奖品，但因为并发处理错误导致奖品数量瞬间变成了负数，
这样的话，活动无法终止。
```

* 当某个方法的代码总行数超过 10 行时，return / throw 等中断逻辑的右大括号后均需要加一个空行
> <font color=#977D06 >说明：</font> 这样做逻辑清晰，有利于代码阅读时重点关注。

* 在方法内，表达异常的分支时，少用 if-else 方式，这种方式可以改写成：
```java
if (condition) { 
    ...
    // 提前return
    return obj;   
}
// 接着写 else 的业务逻辑代码;
```
> <font color=#977D06 >说明：</font> 如果非使用 if()...else if()...else...方式表达逻辑，避免后续代码维护困难，请勿超过 3 层。

```java
正例：超过 3 层的 if-else 的逻辑判断代码可以使用卫语句、策略模式、状态模式等来实现，
其中卫语句示例如下：
public void findBoyfriend (Man man) {
    if (man.isUgly()) {
        System.out.println("本姑娘是外貌协会的资深会员");
        return;
    }
    if (man.isPoor()) {
        System.out.println("贫贱夫妻百事哀");
        return;
    }
    if (man.isBadTemper()) {
        System.out.println("银河有多远，你就给我滚多远");
        return; 
    }
    System.out.println("可以先交往一段时间看看");
}
```
> <font color=#977D06 >说明：</font> 卫语句就是把复杂的条件表达式拆分成多个条件表达式，比如一个很复杂的表达式，嵌套了好几层的if - then-else语句，转换为多个if语句，实现它的逻辑，这多条的if语句就是卫语句.
```java
例子：
if（obj != null）{
  doSomething();
}
 
转换成卫语句以后的代码如下：
if(obj == null){
   return;
}
doSomething();
```

* 除常用方法（如 getXxx/isXxx）等外，不要在条件判断中执行其它复杂的语句，将复杂逻辑判断的结果赋值给一个有意义的布尔变量名，以提高可读性。

> <font color=#977D06 >说明：</font> 很多 if 语句内的逻辑表达式相当复杂，与、或、取反混合运算，甚至各种方法纵深调用，理解成本非常高。如果赋值一个非常好理解的布尔变量名字，则是件令人爽心悦目的事情

```java
* 正例： 
// 伪代码如下
final boolean existed = (file.open(fileName, "w") != null) && (...) || (...);
if (existed) {
    ...
}

* 反例： 
public final void acquire ( long arg) {
    if (!tryAcquire(arg) &&
        acquireQueued(addWaiter(Node.EXCLUSIVE), arg)) {
        selfInterrupt();
}
```

* 循环体中的语句要考量性能，以下操作尽量移至循环体外处理，如定义对象、变量、获取数据库连接，进行不必要的 try-catch 操作（这个 try-catch 是否可以移至循环体外）。

* 避免采用取反逻辑运算符。
> <font color=#977D06 >说明：</font> 取反逻辑不利于快速理解，并且取反逻辑写法一般都存在对应的正向逻辑写法
```javascript
* 正例： 使用 if (x < 628) 来表达 x 小于 628。

* 反例： 使用 if (!(x >= 628)) 来表达 x 小于 628。
```

* 公开接口需要进行入参保护，尤其是批量操作的接口。
```java
* 反例： 某业务系统，提供一个用户批量查询的接口，API 文档上有说最多查多少个，但接口实现上没做任何
保护，导致调用方传了一个 1000 的用户 id 数组过来后，查询信息后，内存爆了
```



