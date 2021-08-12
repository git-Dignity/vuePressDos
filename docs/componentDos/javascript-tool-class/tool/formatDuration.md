
# formatDuration
    
<Common-Democode title="formatDuration" description="如何获得给定毫秒数的可读格式？">
  <componentDos-template-index :code="1"><div class="bold">Tool.formatDuration(ms: Number)</div></componentDos-template-index>
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
               * @description: 底层实现：如何获得给定毫秒数的可读格式？
               * @param { Number } ms 毫秒数
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
                      .map(([key, val]) => val + '' +  key + '' + val !== 1 ? 's' : '')
                      .join(', ');
              }
          },
          mounted:{
              myTool.formatDuration(1001);  // 1 second, 1 millisecond
              myTool.formatDuration(34325055574);  // 397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds
          }
      }
      
    </script>
  </highlight-code>
</Common-Democode>
        