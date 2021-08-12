
# detectDeviceType
    
<Common-Democode title="detectDeviceType" description="如何确定设备是移动设备还是台式机/笔记本电脑？">
  <componentDos-template-index :code="1"><div class="bold">Tool.detectDeviceType()</div></componentDos-template-index>
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
               * @description: 底层实现：如何确定设备是移动设备还是台式机/笔记本电脑？
               * @return { String } 'Mobile' / 'Desktop'
              */
              detectDeviceType() {
                  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
              }
          },
          mounted:{
              myTool.detectDeviceType();  // "Mobile" or "Desktop"
          }
      }
      
    </script>
  </highlight-code>
</Common-Democode>
        