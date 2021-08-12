
# hasClass
    
<Common-Democode title="hasClass" description="如何检查元素是否具有指定的类？">
  <componentDos-template-index :code="1"><div class="bold">Tool.hasClass(el: HTMLElement, className: String)</div></componentDos-template-index>
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
               * @description: 底层实现：如何检查元素是否具有指定的类？
               * @param { HTMLElement } el
               * @param { String } className
               * @return { Boolean } true/false
              */
              hasClass(el, className) {
                  return el.classList.contains(className)
              }
          },
          mounted:{
              myTool.hasClass(document.getElementById('aaa'), 'a');  
          }
      }
      
    </script>
  </highlight-code>
</Common-Democode>
        