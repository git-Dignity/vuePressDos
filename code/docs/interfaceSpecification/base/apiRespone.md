# Response
---

### HTTP状态码 -- STATUS
| 状态码        | 说明           | 
| ------------- |:-------------:| 
| 200 OK      | 服务器成功返回请求的数据 | 
| 201 CREATED      | 新建或修改数据成功      |  
| 202 Accepted | 表示一个请求已经进入后台排队（异步任务）      |   
| 204 NO CONTENT | 删除数据成功      |   
| 400 INVALID REQUEST | 请求有错误，服务器没有进行新建或修改数据的操作（幂等操作）      |   
| 401 Unauthorized | 没有权限（令牌、用户名、密码错误）      |   
| 403 Forbidden | 得到授权（与401错误相对），但是访问是被禁止的      |   
| 404 NOT FOUND | 请求记录不存在，服务器没有进行操作（幂等操作）      |   
| 406 Not Acceptable | 请求的格式不符合（比如用户请求JSON格式，但是只有XML格式）      | 
| 500 INTERNAL SERVER ERROR | 服务器发生错误，无法判断发出的请求是否成功      |   



### CODE
| 状态码        | 说明           | 
| ------------- |:-------------:| 
| 20000       | success | 
| 4XXXX  | Client error      |   
| 40001  | Parameter cannot be empty（参数不可为空）      |   
| 40002  | Please check the parameter constraints（The parameter is not of the expected type） <br>参数约束请检查（参数不是期望的类型）      | 
| 5XXXX  | Server error      | 
| 50001     | invalid access token      |  
| 50002  | already login in other place      |   
| 50003   | access token expired      |   
| 50004  | invalid user (user not exist)      |   
| 50005  | username or password is incorrect      |   

### 格式
* 前后端交互字段全部使用小驼峰方式
* 前后端传输字段需要符合驼峰命名：userName
* 后台返回数据字段需都在data里，不得在data之外；除与前端商定过
* 后台返回值为空时，需返回相对应的键名如：{listData: null} (键值为空时值null)
```
{
  "code": "20000", // 见上述表格（CODE）
  "status": "200", // 见上述表格（STATUS）
  "data": []/{}, // 多条记录使用JSON数组，单条记录使用JSON对象
  "message": []     // 状态为error或fail时，对应的错误信息
}
```

* 为什么要使用code和status，使用一个记录不是可以？
> * **讲解**：
> 
> * 而code是后端手动根据情况而制定的编码，方便前端提示客户端
> * 因为status主要记录的是HTTP响应码，好多javascript框架并不会获取http状态码，所以包装到body中便于使用；
> * **作用**：
> * 前端根据code在请求的拦截器做处理，若code !== "20000"，则将message作为错误信息提示客户端；在请求拦截器被拦截到错误，也不会继续走该页面上的逻辑处理
> * code === "20000"的情况下，客户端的请求将通过拦截器走到页面的逻辑处理，这时可以将status来作为该请求在页面上的相应提示与逻辑判断


