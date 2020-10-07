# 其他
---

> 红色 <font color=#FF0000 >*</font> 代表强制，必须遵循！

### Order

* 任何数据结构的构造或初始化，都应指定大小，避免数据结构无限增长吃光内存

* 及时清理不再使用的代码段或配置信息。
> <font color=#977D06 >说明：</font>  对于垃圾代码或过时配置，坚决清理干净，避免程序过度臃肿，代码冗余
```java
* 正例： 对于暂时被注释掉，后续可能恢复使用的代码片断，在注释代码上方，统一规定使用三个斜杠
(///)
说明注释掉代码的理由。如：
public static void hello() {
    /// 业务方通知活动暂停
    // Business business = new Business();
    // business.active();
    System.out.println("it's finished");
}
```










