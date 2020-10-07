# ORM映射
---

> 红色 <font color=#FF0000 >*</font> 代表强制，必须遵循！<br />
> 看到一条分割线，即代表一个点结束<br />
> POJO类：不包含业务逻辑的单纯用来存储数据的 java类（实际就是普通JavaBean，是为了避免和EJB混淆所创造的简称）

### ORM映射

* <font color=#FF0000 >*</font> 在表查询中，一律不要使用 * 作为查询的字段列表，需要哪些字段必须明确写明
> <font color=#977D06 >说明：</font> <br />
> 增加查询分析器解析成本。<br />
> 增减字段容易与 resultMap 配置不一致。<br />
> 无用字段增加网络消耗，尤其是 text 类型的字段

* <font color=#FF0000 >*</font> POJO 类的布尔属性不能加 is，而数据库字段必须加 is_，要求在 resultMap 中进行字段与属性之间的映射
> <font color=#977D06 >说明：</font> 参见定义 POJO 类以及数据库字段定义规定，在 sql.xml 增加映射，是必须的

* <font color=#FF0000 >*</font> 不要用 resultClass 当返回参数，即使所有类属性名与数据库字段一一对应，也需要
定义`<resultMap>`；反过来，每一个表也必然有一个`<resultMap>`与之对应
> <font color=#977D06 >说明：</font> 配置映射关系，使字段与 DO 类解耦，方便维护<br />
> <font color=#977D06 >注意：</font> 
resultClass 是结果类；
resultMap 是结果映射，需结合resultMap节点对映射关系加以定义。
```java
resultClass取值
1.resultClass="Integer"//基本类型,或者是java.lang.Integer

2.resultClass="com.sfbest.product.bean.ProductPicture"//Model对象

3.resultClass="string"//基本类型,java.lang.String

4.resultClass="long"//基本类型,java.lang.long

5.resultClass="java.util.HashMap"//map集合

//resultClass的用法如下:

<select id="getCount" parameterClass="OrderManualItem" resultClass="java.lang.Integer">
    select count(*) from order_manual_item omi
    where omi.is_delete='N'
</select>
```

* <font color=#FF0000 >*</font> sql.xml 配置参数使用：#{}，#param# 不要使用${} 此种方式容易出现 SQL 注入

* <font color=#FF0000 >*</font> 不允许直接拿 HashMap 与 Hashtable 作为查询结果集的输出
```java
* 反例： 某同学为避免写一个<resultMap>xxx</resultMap>，直接使用 HashTable 来接收数据库返回结
果，结果出现日常是把 bigint 转成 Long 值，而线上由于数据库版本不一样，解析成 BigInteger，导致线
上问题。
```

* <font color=#FF0000 >*</font> 更新数据表记录时，必须同时更新记录对应的 update_time 字段值为当前时间

* 不要写一个大而全的数据更新接口。传入为 POJO 类，不管是不是自己的目标更新字段，都进行 `update table set c1=value1,c2=value2,c3=value3;` 这是不对的。执行 SQL 时，不要更新无改动的字段，一是易出错；二是效率低；三是增加 binlog 存储。

* @Transactional 事务不要滥用。事务会影响数据库的 QPS，另外使用事务的地方需要考虑各方面的回滚方案，包括缓存回滚、搜索引擎回滚、消息补偿、统计修正等

* `<isEqual>`中的 `compareValue` 是与属性值对比的常量，一般是数字，表示相等时带上此条件；`<isNotEmpty>`表示不为空且不为 null 时执行；`<isNotNull>`表示不为 null 值时执行。

