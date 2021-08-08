

# Storage类
对浏览器存储相关storage工具函数进行封装使用。



<Common-Democode title="localStorageSet" description="存贮">
   <componentDos-template-index :code="1"><div class="bold">myStorage.localStorageSet(key: String, value: String)</div></componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
      <script>
    import { Storage } from "javascript-tool-class/src/App";
      export default {
        name: "Storage",
        data() {
          return {
            myStorage: new Storage()
          };
        },
        methods:{
           /**
            * @description: 存贮
            * @description: 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
            * @description: JSON 不允许包含函数，JSON.stringify() 会删除 JavaScript 对象的函数，包括 key 和 value。
            * @description: JSON 不允许包含正则，JSON.stringify() 会删除 正则 对象，value，key保留。
            * @param {HTMLElement} el
            * @param { String } key  属性
            * @param { String } value 值
            * @return 
          */
          localStorageSet (key, value){
              if (typeof (value) === 'object') value = JSON.stringify(value);
              localStorage.setItem(key, value)
          }
        },
        mounted:{
            myStorage.localStorageSet("id",'asas');
        }
      };
      
    </script>
    </template>
  </highlight-code>
</Common-Democode>

