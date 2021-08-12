
# getURLParameters
    
<Common-Democode title="getURLParameters" description="如何创建一个包含当前URL参数的对象？">
  <componentDos-template-index :code="1"><div class="bold">Tool.getURLParameters(url: String)</div></componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
      <script>
    import { Tool } from "javascript-tool-class/src/App";
    
      export default {
          name: "Tool",
          data() {
              return {
                myTool: new Tool()
              }
          },
          methods:{
              /**
               * @description: 底层实现：如何创建一个包含当前URL参数的对象？
               * @description: reduce() 对于空数组是不会执行回调函数的。
               * @param { String } url
               * @return { Object } {n: 'Adam', s: 'Smith'}
              */
              getURLParameters(url) {
                  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
                    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
                    {}
                );
              }
          },
          mounted:{
              myTool.getURLParameters(tool.currentURL());  // {}
              myTool.getURLParameters('http://url.com/page?n=哈哈&s=Smith');  // {n: '哈哈', s: 'Smith'}
          }
      }
      
    </script>
  </highlight-code>
</Common-Democode>
        