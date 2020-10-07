# 命名风格
---

> 红色 <font color=#FF0000 >*</font> 代表强制，必须遵循！

### Style
* <font color=#FF0000 >*</font> 命名不能以下划线`_`和美元符号`$`开头或结尾

```javascript
* 反例： _name / __name / $name / name_ / name$ / name__
```

* <font color=#FF0000 >*</font> 命名不要以拼音和英文混合，更不能用中文、纯拼音命名；最好用**英文**命名

```javascript
* 正例： ali / alibaba / taobao / cainiao/ aliyun/ youku / hangzhou 等国际通用的名称，可视同英文。

* 反例： DaZhePromotion [打折] / getPingfenByName() [评分] / String fw[福娃] / int 某变量 = 3
```
   
* <font color=#FF0000 >*</font> 类名、VUE组件文件、组件名等... 请使用`UpperCamelCase`大驼峰命名，但以下情形例外：<br />DO / BO / DTO / VO / AO / PO / UID 等 <font  color=#999 >（第一个词的首字母，以及后面每个词的首字母都大写）</font>

```javascript
* 正例： ForceCode / MyTable / UserDO / HtmlDTO / XmlService / TcpUdpDeal / TaPromotion

* 反例： forcecode / mytable / UserDo / HTMLDto / XMLService / TCPUDPDeal / TAPromotion
```

* <font color=#FF0000 >*</font> 方法名、参数名、变量等... 都统一使用`lowerCamelCase`小驼峰命名<font  color=#999 >（第一个词的首字母小写，后面每个词的首字母大写）</font>

```javascript
* 正例：  getHttpMessage() / localValue / inputUserId
```

* <font color=#FF0000 >*</font> 常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长

```java
* 正例： MAX_STOCK_COUNT / CACHE_EXPIRED_TIME
```

* <font color=#FF0000 >*</font> 枚举类名带上 `Enum` 后缀，枚举成员名称需要全大写，单词间用下划线隔开
> <font color=#977D06 >说明：</font> 枚举其实就是特殊的常量类，且构造方法被默认强制是私有。

```java
* 正例： 枚举名字为 ProcessStatusEnum 的成员名称：SUCCESS / UNKNOWN_REASON。
```

* <font color=#FF0000 >*</font> 抽象类命名使用 `Abstract 或 Base` 开头；异常类命名使用 `Exception` 结尾；测试类命名以它要测试的类的名称开始，以 `Test` 结尾；枚举类命名使用`Enum`结尾；

* <font color=#FF0000 >*</font> 包名统一使用小写，点分隔符之间有且仅有一个自然语义的英语单词。包名统一使用<font color=#0000FF >单数</font>形式，但是类名如果有复数含义，类名可以使用复数形式。

```java
* 正例： 应用工具类包名为 com.alibaba.ei.kunlun.aap.util、类名为 MessageUtils
（此规则参考 spring 的框架结构）
```

* <font color=#FF0000 >*</font> 避免在子父类的成员变量之间、或者不同代码块的局部变量之间、父子组件之间采用完全相同的命名，使可理解性降低。
> <font color=#977D06 >说明：</font> 子类、父类成员变量名相同，即使是 public 类型的变量也能够通过编译，另外，局部变量在同一方
法内的不同代码块中同名也是合法的，这些情况都要避免。对于非 setter/getter 的参数名称也要避免与成
员变量名称相同。

```java
* 反例： 
public class ConfusingName {
	 public int stock;
		 // 非 setter/getter 的参数名称，不允许与本类成员变量同名
		 public void get(String alibaba) {
			 if (condition) {
				 final int money = 666;
				 // ...
			 }
			 for (int i = 0; i < 10; i++) {
				 // 在同一方法体中，不允许与其它代码块中的 money 命名相同
				 final int money = 15978;
				 // ...
			}
	 } 
 }
 
class Son extends ConfusingName {
	 // 不允许与父类的成员变量名称相同
	 public int stock; 
 }
```

* <font color=#FF0000 >*</font> 杜绝完全不规范的缩写，避免望文不知义。

```java
* 反例： AbstractClass“缩写”成 AbsClass；condition“缩写”成 condi；Function 缩写”成 Fu，此类
随意缩写严重降低了代码的可阅读性。
```

* 命名方法名时，使用完整的单词组合来表达，可做到代码自解释的作用

* 在常量与变量的命名时，表示类型的名词放在词尾，以提升辨识度。

```java
* 正例： startTime / workQueue / nameList / TERMINATED_THREAD_COUNT
* 反例： AbstractClass“缩写”成 AbsClass；condition“缩写”成 condi；Function 缩写”成 Fu，此类
随意缩写严重降低了代码的可阅读性。
```

* 如果模块、接口、类、方法使用了设计模式，在命名时需体现出具体模式
> <font color=#977D06 >说明：</font> 将设计模式体现在名字中，有利于阅读者快速理解架构设计理念。

```java
* 正例： 
    public class OrderFactory; // 工厂模式
    public class LoginProxy;    // 代理模式
    public class ResourceObserver;  // 观察者模式
```

* 各层命名规约：
* Service/DAO 层方法命名规约
    > * 获取单个对象的方法用 get 做前缀。
    > * 获取多个对象的方法用 list 做前缀，复数结尾，如：listObjects。
    > * 获取统计值的方法用 count 做前缀。
    > * 插入的方法用 save/insert 做前缀。
    > * 删除的方法用 remove/delete 做前缀。
    > * 修改的方法用 update 做前缀。
* 领域模型命名规约
    > * 数据对象：xxxDO，xxx 即为数据表名。
    > * 数据传输对象：xxxDTO，xxx 为业务领域相关的名称。
    > * 展示对象：xxxVO，xxx 一般为网页名称。

