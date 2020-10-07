# 建表规约
---

> 红色 <font color=#FF0000 >*</font> 代表强制，必须遵循！

### CreateTableStatute

* <font color=#FF0000 >*</font> 表达是与否概念的字段，必须使用 is_xxx 的方式命名，数据类型是 unsigned tinyint（1 表示是，0 表示否）。
> <font color=#977D06 >说明：</font> 任何字段如果为非负数，必须是 unsigned。

> <font color=#977D06 >注意：</font> POJO 类中的任何布尔类型的变量，都不要加 is 前缀，所以，需要在`<resultMap>`设置从 is_xxx 到Xxx 的映射关系。数据库表示是与否的值，使用 tinyint 类型，坚持 is_xxx 的命名方式是为了明确其取值含义与取值范围。
```java
* 正例： 表达逻辑删除的字段名 is_deleted，1 表示删除，0 表示未删除
```
 
* <font color=#FF0000 >*</font> 表名、字段名必须使用小写字母或数字，禁止出现数字开头，禁止两个下划线中间只
出现数字。数据库字段名的修改代价很大，因为无法进行预发布，所以字段名称需要慎重考虑
> <font color=#977D06 >说明：</font> MySQL 在 Windows 下不区分大小写，但在 Linux 下默认是区分大小写。因此，数据库名、表名、字段名，都不允许出现任何大写字母，避免节外生枝。
```java
* 正例： aliyun_admin，rdc_config，level3_name

* 反例： AliyunAdmin，rdcConfig，level_3_name
```

* <font color=#FF0000 >*</font> 主键索引名为 pk_字段名；唯一索引名为 uk_字段名；普通索引名则为 idx_字段名
> <font color=#977D06 >说明：</font> pk_ 即 primary key；uk_ 即 unique key；idx_ 即 index 的简称

* <font color=#FF0000 >*</font> 小数类型为 decimal，禁止使用 float 和 double。
> <font color=#977D06 >说明：</font> 在存储的时候，float 和 double 都存在精度损失的问题，很可能在比较值的时候，得到不正确的结果。如果存储的数据范围超过 decimal 的范围，建议将数据拆成整数和小数并分开存储。

* <font color=#FF0000 >*</font> 如果存储的字符串长度几乎相等，使用 char 定长字符串类型

* <font color=#FF0000 >*</font> varchar 是可变长字符串，不预先分配存储空间，长度不要超过 5000，如果存储长度
大于此值，定义字段类型为 text，独立出来一张表，用主键来对应，避免影响其它字段索引效率

* <font color=#FF0000 >*</font> 表必备三字段：id, create_time, update_time。
> <font color=#977D06 >说明：</font> 其中 id 必为主键，类型为 bigint unsigned、单表时自增、步长为 1。create_time, update_time的类型均为 datetime 类型，前者现在时表示主动式创建，后者过去分词表示被动式更新

* 表的命名最好是遵循“业务名称_表的作用”。
```java
* 正例： alipay_task / force_project / trade_config
```

* 单表行数超过 500 万行或者单表容量超过 2GB，才推荐进行分库分表。
> <font color=#977D06 >说明：</font> 如果预计三年后的数据量根本达不到这个级别，请不要在创建表时就分库分表。

* 合适的字符存储长度，不但节约数据库表空间、节约索引存储，更重要的是提升检索速度
```java
* 正例： 无符号值可以避免误存负数，且扩大了表示范围。
```

| 对象       | 年龄区间           | 类型         | 字节         | 表示范围         |
| ----------------- |:-------------:| --------:|  --------: | --------: |
| 人          | 150岁之内 | tinyint unsigned | 1 | 无符号值：0 到 255 |
| 龟          | 数百岁      |   smallint unsigned | 2 | 无符号值：0 到 65535 |
| 恐龙化石        | 数千万年       |    int unsigned |  4 | 无符号值：0 到约 43 亿 |
| 太阳        | 约 50 亿年      |    bigint unsigned |  8 | 无符号值：0 到约 10 的 19 次方 |


