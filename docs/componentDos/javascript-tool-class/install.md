# 安装
---

### javascript-tool-class 安装
推荐使用 npm 的方式安装，它能更好地和 **webpack** 打包工具配合使用。

```
npm install javascript-tool-class --save-dev
```

### 引入使用

```javascript
import { Check } from "javascript-tool-class/src/App";
public myCheck = new Check();
myCheck.isMPRelaxed(value)
```