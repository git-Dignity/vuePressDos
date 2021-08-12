
# getImages
    
<Common-Democode title="getImages" description="如何获取元素中的所有图像？">
  <componentDos-template-index :code="1"><div class="bold">Tool.getImages(el: HTMLElement, partiallyVisible: Boolean)</div></componentDos-template-index>
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
               * @description: 底层实现：如何获取元素中的所有图像？
               * @param { HTMLElement } el
               * @param { Boolean } partiallyVisible = false false：去重；true：不去重
               * @return { Array } ['image1.jpg', 'image2.png', 'image1.png', '...']
              */
              getImages(el, includeDuplicates = false) {
                  const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
                  return includeDuplicates ? images : [...new Set(images)];
              }
          },
          mounted:{
              // 不去重
              myTool.getImages(document,true);  // ['image1.jpg', 'image2.png', 'image1.png', '...']
                
              // 去重
              myTool.getImages(document,false);  // ['image1.jpg', 'image2.png', '...']
          }
      }
      
    </script>
  </highlight-code>
</Common-Democode>
        