
# 使用
对正则校验check工具函数进行封装使用。


<Common-Democode title="使用" description="在项目中使用import进行引入使用。">
<!-- 这里只能写组件，写个名字是不可以的，我就写个组件传个插槽进来 -->
  <componentDos-template-index>Check类</componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
    <script>
    import { Check } from "javascript-tool-class/src/App";
      export default {
        name: "Check",
        data() {
          return {
            myCheck: new Check()
          };
        },
        mounted:{
            console.log('这里就可以使用该类的所有方法 this.myCheck.xxx(xxx)')
        }
      };
      
    </script>

  </highlight-code>
</Common-Democode>