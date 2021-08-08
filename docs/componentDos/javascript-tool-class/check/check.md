

# Check类
对正则校验check工具函数进行封装使用。



<Common-Democode title="isNoWord" description="验证不能包含字母">
   <componentDos-template-index :code="1"><div class="bold">myTool.isNoWord(value: String)</div></componentDos-template-index>
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
        methods:{
            /**
              * @description: 验证不能包含字母
              * @param { String } value
              * @return { Boolean } true / false
            */
            isNoWord (value ){
                return  /^[^A-Za-z]*$/g.test(value); 
            }
        },
        mounted:{
            myCheck.isNoWord("3436"); // true
        }
      };
      
    </script>
    </template>
  </highlight-code>
</Common-Democode>
