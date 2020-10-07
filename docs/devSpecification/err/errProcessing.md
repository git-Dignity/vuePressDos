# 异常处理

> 红色 <font color=#FF0000 >*</font> 代表强制，必须遵循！

### ErrProcessing

* <font color=#FF0000 >*</font> Java 类库中定义的可以通过预检查方式规避的 RuntimeException 异常不应该通过
catch 的方式来处理，比如：NullPointerException，IndexOutOfBoundsException 等等
> <font color=#977D06 >说明：</font> 无法通过预检查的异常除外，比如，在解析字符串形式的数字时，可能存在数字格式错误，不得不通过 catch NumberFormatException 来实现。
```java
* 正例： if (obj != null) {...}

* 反例： try { obj.method(); } catch (NullPointerException e) {…}
```

* <font color=#FF0000 >*</font> 异常捕获后不要用来做流程控制，条件控制。
> <font color=#977D06 >说明：</font>异常设计的初衷是解决程序运行中的各种意外情况，且异常的处理效率比条件判断方式要低很多

* <font color=#FF0000 >*</font> catch 时请分清稳定代码和非稳定代码，稳定代码指的是无论如何不会出错的代码。
对于非稳定代码的 catch 尽可能进行区分异常类型，再做对应的异常处理
> <font color=#977D06 >说明：</font> 对大段代码进行 try-catch，使程序无法根据不同的异常做出正确的应激反应，也不利于定位问题，这是一种不负责任的表现
```java
* 正例： 用户注册的场景中，如果用户输入非法字符，或用户名称已存在，或用户输入密码过于简单，在程序上作出分门别类的判断，并提示给用户
```

* <font color=#FF0000 >*</font> catch 捕获异常是为了处理它，不要捕获了却什么都不处理而抛弃之，如果不想处理它，请将该异常抛给它的调用者。最外层的业务使用者，必须处理异常，将其转化为用户可以理解的内容

* <font color=#FF0000 >*</font> catch 不要在 finally 块中使用 return。
> <font color=#977D06 >说明：</font> try 块中的 return 语句执行成功后，并不马上返回，而是继续执行 finally 块中的语句，如果此处存在 return 语句，则在此直接返回，无情丢弃掉 try 块中的返回点
```java
* 反例： 
private int x = 0;
public int checkReturn() {
    try {
        // x 等于 1，此处不返回
        return ++x;
    } finally {
        // 返回的结果是 2
        return ++x;
    } 
}
```

* 方法的返回值可以为 null，不强制返回空集合，或者空对象等，必须添加注释充分说明什么情况下会返回 null 值。
> <font color=#977D06 >说明：</font> 本手册明确防止 NPE<font  color=#999 >（空指针异常）</font> 是调用者的责任。即使被调用方法返回空集合或者空对象，对调用者来说，也并非高枕无忧，必须考虑到远程调用失败、序列化失败、运行时异常等场景返回 null 的情况

* 防止 NPE，是程序员的基本修养，注意 NPE 产生的场景：
> * 返回类型为基本数据类型，return 包装数据类型的对象时，自动拆箱有可能产生 NPE。<br />
    <font color=#977D06 >反例：</font> `public int f() { return Integer 对象}`， 如果为 null，自动解箱抛 NPE。
> * 数据库的查询结果可能为 null
> * 集合里的元素即使 isNotEmpty，取出的数据元素也可能为 null。
> * 远程调用返回对象时，一律要求进行空指针判断，防止 NPE。
> * 对于 Session 中获取的数据，建议进行 NPE 检查，避免空指针。
> * 级联调用 obj.getA().getB().getC()；一连串调用，易产生 NPE。
```java
* 正例： 使用 JDK8 的 Optional 类来防止 NPE 问题
```

* 对于公司外的 http/api 开放接口必须使用 errorCode；而应用内部推荐异常抛出；跨应用间 RPC 调用优先考虑使用 Result 方式，封装 isSuccess()方法、errorCode、errorMessage；而应用内部直接抛出异常即可
> <font color=#977D06 >说明：</font> 关于 RPC 方法返回方式使用 Result 方式的理由：
> * 使用抛异常返回方式，调用方如果没有捕获到就会产生运行时错误。<br />
> * 如果不加栈信息，只是 new 自定义异常，加入自己的理解的 error message，对于调用端解决问题的帮助不会太多。如果加了栈信息，在频繁调用出错的情况下，数据序列化和传输的性能损耗也是问题。


