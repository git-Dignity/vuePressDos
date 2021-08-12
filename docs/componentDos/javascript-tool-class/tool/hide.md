
# hide
    
<Common-Democode title="hide" description="如何隐藏所有指定的元素。">
  <componentDos-template-index :code="1"><div class="bold">Tool.hide(el: HTMLElement)</div></componentDos-template-index>
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
               * @description: 底层实现：如何隐藏所有指定的元素。
               * @param { HTMLElement } el
               * @return { * } 
              */
              hide(el) {
                  Array.from(el).forEach(e => (e.style.display = 'none'));
              }
          },
          mounted:{
              myTool.hide(document.querySelectorAll('p'));  
          }
      }
      
    </script>
  </highlight-code>
</Common-Democode>
        