# DateOperation类
对常用的各种日期操作进行封装使用。



<Common-Democode title="get_current_timestamp" description="获取当前时间戳">
   <componentDos-template-index :code="1"><div class="bold">myTool.get_current_timestamp()</div></componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
      <script>
    import { DateOperation } from "javascript-tool-class/src/App";
      export default {
        name: "DateOperation",
        data() {
          return {
            myDateOperation: new DateOperation()
          };
        },
        methods:{
           /**
            * @description: 获取当前时间戳
            * @return { Number } 
          */
          get_current_timestamp(){
              return Date.parse(new  Date())
          }
        },
        mounted:{
            myDateOperation.get_current_timestamp(); // 1628411430000
        }
      };
      
    </script>
    </template>
  </highlight-code>
</Common-Democode>
