
# getScrollPosition
    
<Common-Democode title="getScrollPosition" description="如何获取当前页面的滚动位置？">
  <componentDos-template-index :code="1"><div class="bold">Tool.getScrollPosition(el: HTMLElement)</div></componentDos-template-index>
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
               * @description: 底层实现：如何获取当前页面的滚动位置？
               * @description: scrollLeft和scrollTop是IE8可兼容
               * @param { HTMLElement } el
               * @return { Object } {x: 0, y: 200}
              */
              getScrollPosition(el = window) {
                  return {
                      x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
                      y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
                  }
              }
          },
          mounted:{
              myTool.getScrollPosition();  // {x: 0, y: 200}
          }
      }
      
    </script>
  </highlight-code>
</Common-Democode>
        