
# Browser类
对浏览器操作相关browser工具函数进行封装使用。



<Common-Democode title="currentURL" description="返回当前url">
   <componentDos-template-index :code="1"><div class="bold">myTool.currentURL()</div></componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
      <script>
    import { Browser } from "javascript-tool-class/src/App";
      export default {
        name: "Browser",
        data() {
          return {
            myBrowser: new Browser()
          };
        },
        methods:{
          /**
            * @description: 返回当前url
            * @return { String } 
          */
          currentURL (){
              return window.location.href;
          }
        },
        mounted:{
            myBrowser.currentURL(); // http://localhost:2333/
        }
      };
      
    </script>
    </template>
  </highlight-code>
</Common-Democode>
