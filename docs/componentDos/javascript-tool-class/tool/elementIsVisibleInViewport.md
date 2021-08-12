
# elementIsVisibleInViewport
    
<Common-Democode title="elementIsVisibleInViewport" description="如何检查指定的元素在视口中是否可见？">
  <componentDos-template-index :code="1"><div class="bold">Tool.elementIsVisibleInViewport(el: HTMLElement, partiallyVisible: Boolean)</div></componentDos-template-index>
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
               * @description: 底层实现：如何检查指定的元素在视口中是否可见？
               * @param { HTMLElement } el
               * @param { Boolean } partiallyVisible = false partiallyVisible是否开启全屏； 为true 需要全屏(上下左右)可以见
               * @return { Boolean } true/false
              */
              elementIsVisibleInViewport(el, partiallyVisible = false) {
                  const { top, left, bottom, right } = el.getBoundingClientRect();
                  const { innerHeight, innerWidth } = window;
                  return partiallyVisible
                      ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
                      ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
                      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
              }
          },
          mounted:{
              // 需要左右可见
              myTool.elementIsVisibleInViewport(document.querySelector('head'), document.querySelector('title'));  // true
                
              // 需要全屏(上下左右)可以见
              myTool.elementIsVisibleInViewport(document.querySelector('head'), document.querySelector('body'));  // false
          }
      }
      
    </script>
  </highlight-code>
</Common-Democode>
        