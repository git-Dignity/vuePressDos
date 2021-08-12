
# off
    
<Common-Democode title="off" description="如何从元素中移除事件监听器?">
  <componentDos-template-index :code="1"><div class="bold">Tool.off(el: HTMLElement, evt: String, fn: Function, opts: Boolean)</div></componentDos-template-index>
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
               * @description: 底层实现：如何从元素中移除事件监听器?
               * @param { HTMLElement } el
               * @param { String } evt 事件类型 如：'click'
               * @param { Function } fn 绑定函数
               * @param { Boolean } opts = false 指定移除事件句柄的阶段。true：在捕获阶段移除事件句柄；false- 默认：在冒泡阶段移除事件句柄
               * @return { * }
              */
              off(el, evt, fn, opts = false) {
                  el.removeEventListener(evt, fn, opts);
              }
          },
          mounted:{
              const fn = () => console.log('!');
              document.body.addEventListener('click', fn);
              myTool.off(document.body, 'click', fn);  
          }
      }
      
    </script>
  </highlight-code>
</Common-Democode>
        