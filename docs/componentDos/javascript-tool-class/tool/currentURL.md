
# currentURL
    
<Common-Democode title="currentURL" description="获取当前url">
  <componentDos-template-index :code="1"><div class="bold">Tool.currentURL()</div></componentDos-template-index>
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
               * @description: 底层实现：获取当前url
               * @return { String } 'Mobile' / 'Desktop'
              */
              currentURL() {
                  return window.location.href
              }
          },
          mounted:{
              myTool.currentURL();  // "http://localhost:9000/"
          }
      }
      
    </script>
  </highlight-code>
</Common-Democode>
        