# 日期时间
---

> 红色 <font color=#FF0000 >*</font> 代表强制，必须遵循！

### DateTime

* <font color=#FF0000 >*</font> 日期格式化时，传入 pattern 中表示年份统一使用小写的 y。

```java
* 正例： 表示日期和时间的格式如下所示：
new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
```

* <font color=#FF0000 >*</font> 在日期格式中分清楚大写的 M 和小写的 m，大写的 H 和小写的 h 分别指代的意义
> <font color=#977D06 >说明：日期格式中的这两对字母表意如下：</font> 
> * 表示月份是大写的 M；
> * 表示分钟则是小写的 m；
> * 24 小时制的是大写的 H；
> * 12 小时制的则是小写的 h。
 
* <font color=#FF0000 >*</font> 不要在程序中写死一年为 365 天，避免在公历闰年时出现日期转换错误或程序逻辑错误

```javascript
* 正例： 
// 获取今年的天数
int daysOfThisYear = LocalDate.now().lengthOfYear();
// 获取指定某年的天数
LocalDate.of(2011, 1, 1).lengthOfYear();

* 反例： 
// 第一种情况：在闰年 366 天时，出现数组越界异常
int[] dayArray = new int[365];
// 第二种情况：一年有效期的会员制，今年 1 月 26 日注册，硬编码 365 返回的却是 1 月 25 日
Calendar calendar = Calendar.getInstance();
calendar.set(2020, 1, 26);
calendar.add(Calendar.DATE, 365);
```

