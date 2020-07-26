# Request
---




| 请求方法       | 说明           | 安全性         | 幂等性         |
| ----------------- |:-------------:| --------:|  --------: |
| GET(SELECT)          | 从服务器取出资源（一项或多项） | <i class="el-icon-circle-check" style="color:green"></i> | <i class="el-icon-circle-check" style="color:green"></i> |
| POST(CREATE)          | 在服务器新建一个资源      |   <i class="el-icon-circle-close" style="color:red"></i> | <i class="el-icon-circle-close" style="color:red"></i> |
| PUT(UPDATE)        | 在服务器更新资源（客户端提供改变后的完整资源）       |    <i class="el-icon-circle-close" style="color:red"></i> |  <i class="el-icon-circle-check" style="color:green"></i> |
| PATCH(UPDATE)        | 在服务器更新资源（客户端提供改变的属性）      |    <i class="el-icon-circle-close" style="color:red"></i> |  <i class="el-icon-circle-close" style="color:red"></i> |
| DELETE(DELETE)        | 从服务器删除资源      |    <i class="el-icon-circle-close" style="color:red"></i> |  <i class="el-icon-circle-check" style="color:green"></i> |


### 说明
* 安全性 ：不会改变资源状态，可以理解为只读的；

* 幂等性 ：执行1次和执行N次，对资源状态改变的效果是等价的。
* **查询字段内容过多，统一使用POST方式查询，请求地址增加/query加以区分**
* **批量删除，统一使用POST方式，请求地址增加/delete加以区分**
> 由于存在批量删除的情况，而一些网关、代理、防火墙在收到DELETE请求后，会把请求的body直接剥离掉。建议将存在批量删除的接口统一改成POST提交，为了标识是删除操作，在请求路径上增加/delete。


### 以下对Request详细解说
小场景
> 在音乐中，有纯音乐、摇滚、民谣...等类型；这些类型可以分类为曲风、乐器、音乐人、心情；而这些类型（曲风、乐器）又可分为吉他、钢琴、小提琴


### GET
被用于获取资源。不允许对服务器上资源做任何修改操作。

示例：
```
* GET /music：列出所有音乐（纯音乐、摇滚、民谣...等类型）

* GET /music/ID：获取某种指定音乐类别的信息（纯音乐这种类型）

* GET /music/ID/instrument：列出某个指定的音乐类别的所有乐器（纯音乐这种类型下的乐器(instrument)类别）
```

### POST
常用于创建新资源。

示例：
```
* POST /music：新建一条音乐
```
 
### PUT
常用于更新资源（传整个实体）。通过请求体携带资源发送给服务器

示例：
```
* PUT /music/ID：更新某个指定音乐的信息（纯音乐、摇滚、民谣...等类型）（提供该音乐类型的全部信息）
```
 
### PATCH
常用于更新局部资源（传指定属性）。如果 URI 对应的资源不存在，服务端可以创建一个新资源


示例：
```
* PATCH /music/ID：更新某个指定音乐的信息（纯音乐、摇滚、民谣...等类型）（提供该音乐类型的部分信息）
```

### PATCH和PUT的区别
* 概念上
    > * patch方法用来更新局部资源，这句话我们该如何理解？
    > * 假设我们有一个UserInfo，里面有userId， userName， userGender等10个字段。可你的编辑功能因为需求，在某个特别的页面里只能修改userName，这时候的更新怎么做？
    > * 人们通常(为徒省事)把一个包含了修改后userName的完整userInfo对象传给后端，做完整更新。但仔细想想，这种做法感觉有点二，而且真心浪费带宽。 
    > * 于是patch诞生，只传一个userName到指定资源去，表示该请求是一个局部更新，后端仅更新接收到的字段。
    > * 而put虽然也是更新资源，但要求前端提供的一定是一个完整的资源对象，理论上说，如果你用了put，但却没有提供完整的UserInfo，那么缺了的那些字段应该被清空。
* 如何理解put为幂等，patch为非幂等？
> **The PATCH Method** <br><br>The PATCH method requests that a set of changes described in the<br>request entity be applied to the resource identified by the Request-<br>URI. The set of changes is represented in a format called a "patch<br>document" identified by a media type. If the Request-URI does not<br>point to an existing resource, the server MAY create a new resource,<br>depending on the patch document type (whether it can logically modify a null resource) and permissions, etc.<br><br>**其中有很重要一句说明，如果 URI 对应的资源不存在，服务端可以创建一个新资源。**


### DELETE
删除资源

示例：
```
* DELETE /music/ID/instrument/ID：删除某个指定音乐类别的指定乐器（纯音乐这种类型下的乐器(instrument)类别下的某一种乐器）
```


