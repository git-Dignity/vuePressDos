
# toggleClass
    
<Common-Democode title="toggleClass" description="如何切换一个元素的类? 有类就删除，无类就添加">
  <componentDos-template-index :code="1"><div class="bold">Tool.toggleClass(el: HTMLElement, className: String)</div></componentDos-template-index>
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
               * @description: 底层实现：如何切换一个元素的类? 有类就删除，无类就添加
               * @param { HTMLElement } el
               * @param { String } className
               * @return { Boolean } true/false
              */
              toggleClass(el, className) {
                  el.classList.toggle(className)
              }
          },
          mounted:{
              myTool.toggleClass(document.querySelector('p#b'), 'a');  
          }
      }
      
    </script>
  </highlight-code>
</Common-Democode>
        