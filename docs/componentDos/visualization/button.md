# Button 按钮
常用的操作按钮。


<Common-Democode title="基础用法" description="基础的按钮用法。">
  <componentDos-visualization-button-Button></componentDos-visualization-button-Button>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-button">
        <div>
          <zzm-btn type="primary" >主要按钮</zzm-btn>
          <zzm-btn  type="success" >成功按钮</zzm-btn>
          <zzm-btn  type="info" >信息按钮</zzm-btn>
          <zzm-btn   type="warning" >警告按钮</zzm-btn>
          <zzm-btn  type="danger" >危险按钮</zzm-btn>
        </div>
      </div>
    </template>
  </highlight-code>
</Common-Democode>

<Common-Democode title="加载中" description="点击按钮后进行数据加载操作，在按钮上显示加载状态。（要设置为 loading 状态，只要设置loading属性为true即可）">
  <componentDos-visualization-button-LoadingButton></componentDos-visualization-button-LoadingButton>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-button">
        <div>
          <zzm-btn class="btn-item" :loading="isClick" type="primary" @click="loadClick">主要按钮</zzm-btn>
        </div>
      </div>
    </template>
    <script>
      export default {
        name: "loadingButtonWrap",
        data() {
          return {
            isClick: true
          };
        },
        methods: {
          loadClick() {}
        }
      };
    </script>
  </highlight-code>
</Common-Democode>

<Common-Democode title="不同尺寸" description="Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。（额外的尺寸：medium、small、mini，通过设置size属性来配置它们。）">
  <componentDos-visualization-button-ButtonSize></componentDos-visualization-button-ButtonSize>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-button">
        <div>
          <zzm-btn class="btn-item">默认按钮</zzm-btn>
          <zzm-btn class="btn-item" size="medium">中等按钮</zzm-btn>
          <zzm-btn class="btn-item" size="small">小型按钮</zzm-btn>
          <zzm-btn class="btn-item" size="mini">超小按钮</zzm-btn>
        </div>
      </div>
    </template>
  </highlight-code>
</Common-Democode>
<br />

### Button Attributes

| 参数       | 中文描述           | 类型         | 可选择         | 默认值         | 
| ----------------- |:-------------:| -----------------:| --------------------:| --------:| 
| size          | 尺寸 | `string` | medium / small / mini | -- |
| type         | 类型      |   `string` |    primary / success / warning / danger / info    | -- |
| loading        | 是否加载中状态       |    `boolean` |  -- | false