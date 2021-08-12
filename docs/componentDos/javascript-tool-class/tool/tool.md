
# Tool类
对常用的方法进行封装使用。



<Common-Democode title="hide" description="如何隐藏所有指定的元素。">
   <componentDos-template-index :code="1"><div class="bold">myTool.hide(el: HTMLElement)</div></componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
      <script>
    import { Tool } from "javascript-tool-class/src/App";
      export default {
        name: "Tool",
        data() {
          return {
            myTool: new Tool()
          };
        },
        methods:{
           /**
            * @description: 底层实现：如何隐藏所有指定的元素
            * @param { HTMLElement } el
            * @return 
            */
            hide(el) {
                Array.from(el).forEach(e => (e.style.display = 'none'));
            }
        },
        mounted:{
            myTool.hide(document.querySelectorAll('p'));
        }
      };
      
    </script>
  </highlight-code>
</Common-Democode>



<Common-Democode title="hasClass" description="如何检查元素是否具有指定的类？">
   <componentDos-template-index :code="1"><div class="bold">myTool.hasClass(el: HTMLElement, className: string)</div></componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
      <script>
    import { Tool } from "javascript-tool-class/src/App";
      export default {
        name: "Tool",
        data() {
          return {
            myTool: new Tool()
          };
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
            myTool.hasClass(document.getElementById('aaa'), 'a');  // true
        }
      };
      
    </script>
  </highlight-code>
</Common-Democode>


<Common-Democode title="toggleClass" description="如何切换一个元素的类? 有类就删除，无类就添加">
   <componentDos-template-index :code="1"><div class="bold">myTool.toggleClass(el: HTMLElement, className: string)</div></componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
      <script>
    import { Tool } from "javascript-tool-class/src/App";
      export default {
        name: "Tool",
        data() {
          return {
            myTool: new Tool()
          };
        },
        methods:{
           /**
            * @description: 底层实现：如何切换一个元素的类? 有类就删除，无类就添加
            * @param { HTMLElement } el
            * @param { String } className
            * @return 
          */
          toggleClass(el, className) {
              el.classList.toggle(className)
          }
        },
        mounted:{
            myTool.toggleClass(document.querySelector('p#b'), 'a'); 
        }
      };
      
    </script>
    </template>
  </highlight-code>
</Common-Democode>



<Common-Democode title="getScrollPosition" description="如何获取当前页面的滚动位置？">
   <componentDos-template-index :code="1"><div class="bold">myTool.getScrollPosition(el: HTMLElement)</div></componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
      <script>
    import { Tool } from "javascript-tool-class/src/App";
      export default {
        name: "Tool",
        data() {
          return {
            myTool: new Tool()
          };
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
            myTool.getScrollPosition(); // {x: 0, y: 200}
        }
      };
      
    </script>
    </template>
  </highlight-code>
</Common-Democode>


<Common-Democode title="elementContains" description="如何检查父元素是否包含子元素？">
   <componentDos-template-index :code="1"><div class="bold">myTool.elementContains(parent: HTMLElement, child: HTMLElement)</div></componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
      <script>
    import { Tool } from "javascript-tool-class/src/App";
      export default {
        name: "Tool",
        data() {
          return {
            myTool: new Tool()
          };
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
            myTool.elementContains(document.querySelector('head'), document.querySelector('title'))  // true

            myTool.elementContains(document.querySelector('head'), document.querySelector('body'))  // false
        }
      };
      
    </script>
    </template>
  </highlight-code>
</Common-Democode>



<Common-Democode title="elementIsVisibleInViewport" description="如何检查指定的元素在视口中是否可见？">
   <componentDos-template-index :code="1"><div class="bold">myTool.elementIsVisibleInViewport(el: HTMLElement, partiallyVisible: Boolean)</div></componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
      <script>
    import { Tool } from "javascript-tool-class/src/App";
      export default {
        name: "Tool",
        data() {
          return {
            myTool: new Tool()
          };
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
            myTool.elementIsVisibleInViewport(document.getElementById('aaa'))  // true

            // 需要全屏(上下左右)可以见
            myTool.elementIsVisibleInViewport(document.getElementById('aaa'),true)  // true
        }
      };
      
    </script>
    </template>
  </highlight-code>
</Common-Democode>



<Common-Democode title="getImages" description="如何获取元素中的所有图像？">
   <componentDos-template-index :code="1"><div class="bold">myTool.getImages(el: HTMLElement, includeDuplicates: Boolean)</div></componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
      <script>
    import { Tool } from "javascript-tool-class/src/App";
      export default {
        name: "Tool",
        data() {
          return {
            myTool: new Tool()
          };
        },
        methods:{
          /**
            * @description: 底层实现：如何获取元素中的所有图像？
            * @param {HTMLElement} el
            * @param {Boolean} includeDuplicates = false false：去重；true：不去重
            * @return { Array } ['image1.jpg', 'image2.png', 'image1.png', '...']
          */
          getImages(el, includeDuplicates = false) {
              const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
              return includeDuplicates ? images : [...new Set(images)];
          }
        },
        mounted:{
            // 不去重
            myTool.getImages(document,true)  // ['image1.jpg', 'image2.png', 'image1.png', '...']

            // 去重
            myTool.getImages(document,false) // ['image1.jpg', 'image2.png', '...']
        }
      };
      
    </script>
    </template>
  </highlight-code>
</Common-Democode>



<Common-Democode title="detectDeviceType" description="如何确定设备是移动设备还是台式机/笔记本电脑？">
   <componentDos-template-index :code="1"><div class="bold">myTool.detectDeviceType()</div></componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
      <script>
    import { Tool } from "javascript-tool-class/src/App";
      export default {
        name: "Tool",
        data() {
          return {
            myTool: new Tool()
          };
        },
        methods:{
          /**
            * @description: 底层实现：如何确定设备是移动设备还是台式机/笔记本电脑？
            * @return { String } 'Mobile' / 'Desktop'
          */
          detectDeviceType() {
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
          }
        },
        mounted:{
            myTool.detectDeviceType() // "Mobile" or "Desktop"
        }
      };
      
    </script>
    </template>
  </highlight-code>
</Common-Democode>



<Common-Democode title="currentURL" description="获取当前url">
   <componentDos-template-index :code="1"><div class="bold">myTool.currentURL()</div></componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
      <script>
    import { Tool } from "javascript-tool-class/src/App";
      export default {
        name: "Tool",
        data() {
          return {
            myTool: new Tool()
          };
        },
        methods:{
          /**
            * @description: 底层实现：获取当前url
            * @return { String } 
          */
          currentURL() {
              return window.location.href
          }
        },
        mounted:{
            myTool.currentURL()   // http://localhost:9000/
        }
      };
      
    </script>
    </template>
  </highlight-code>
</Common-Democode>



<Common-Democode title="getURLParameters" description="如何创建一个包含当前URL参数的对象？">
   <componentDos-template-index :code="1"><div class="bold">myTool.getURLParameters(url: String)</div></componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
      <script>
    import { Tool } from "javascript-tool-class/src/App";
      export default {
        name: "Tool",
        data() {
          return {
            myTool: new Tool()
          };
        },
        methods:{
          /**
            * @description: 如何创建一个包含当前URL参数的对象？
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
            myTool.getURLParameters(tool.currentURL()) // {}
            myTool.getURLParameters('http://url.com/page?n=哈哈&s=Smith')) // {n: '哈哈', s: 'Smith'}
        }
      };
      
    </script>
    </template>
  </highlight-code>
</Common-Democode>


<Common-Democode title="off" description="如何从元素中移除事件监听器?">
   <componentDos-template-index :code="1"><div class="bold">myTool.off(el: HTMLElement, evt: String, fn: Function, opts: Boolean)</div></componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
      <script>
    import { Tool } from "javascript-tool-class/src/App";
      export default {
        name: "Tool",
        data() {
          return {
            myTool: new Tool()
          };
        },
        methods:{
          /**
            * @description: 如何从元素中移除事件监听器?
            * @param {HTMLElement} el
            * @param { String } evt 事件类型 如：'click'
            * @param { Function } fn 绑定函数
            * @param { Boolean } opts = false 指定移除事件句柄的阶段。true：在捕获阶段移除事件句柄；false- 默认：在冒泡阶段移除事件句柄
            * @return 
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
      };
      
    </script>
    </template>
  </highlight-code>
</Common-Democode>




<Common-Democode title="formatDuration" description="如何获得给定毫秒数的可读格式？">
   <componentDos-template-index :code="1"><div class="bold">myTool.formatDuration(ms: Number)</div></componentDos-template-index>
  <highlight-code slot="codeText" lang="vue">
      <script>
    import { Tool } from "javascript-tool-class/src/App";
      export default {
        name: "Tool",
        data() {
          return {
            myTool: new Tool()
          };
        },
        methods:{
          /**
           * @description: 如何获得给定毫秒数的可读格式？
           * @param {Number} ms 毫秒数
           * @return { String }  1000ms = 1s
           */    
          formatDuration(ms) {
              if (ms < 0) ms = -ms;
              const time = {
                  day: Math.floor(ms / 86400000),
                  hour: Math.floor(ms / 3600000) % 24,
                  minute: Math.floor(ms / 60000) % 60,
                  second: Math.floor(ms / 1000) % 60,
                  millisecond: Math.floor(ms) % 1000
              };
              return Object.entries(time)
                  .filter(val => val[1] !== 0)
                  .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
                  .join(', ');
          }
        },
        mounted:{
            myTool.formatDuration(1001);   // 1 second, 1 millisecond

            myTool.formatDuration(34325055574);   // 397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds
        }
      };
      
    </script>
    </template>
  </highlight-code>
</Common-Democode>