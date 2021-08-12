
# elementContains
    
<Common-Democode title="elementContains" description="如何检查父元素是否包含子元素？">
  <componentDos-template-index :code="1"><div class="bold">Tool.elementContains(parent: HTMLElement, child: HTMLElement)</div></componentDos-template-index>
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
               * @description: 底层实现：如何检查父元素是否包含子元素？
               * @param { HTMLElement } parent
               * @param { HTMLElement } child
               * @return { Boolean } true/false
              */
              elementContains(parent, child) {
                  return parent !== child && parent.contains(child);
              }
          },
          mounted:{
              myTool.elementContains(document.querySelector('head'), document.querySelector('title'));  // true
              myTool.elementContains(document.querySelector('head'), document.querySelector('body'));  // false
          }
      }
      
    </script>
  </highlight-code>
</Common-Democode>
        