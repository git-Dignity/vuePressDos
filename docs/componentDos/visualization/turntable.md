# Turntable 大转盘
来大转盘，转出你的口味吧！



<Common-Democode title="使用方法" description="基础用法。">
  <componentDos-visualization-turntable-index></componentDos-visualization-turntable-index>
  <highlight-code slot="codeText" lang="vue">
    <template>
    <div class="hello">
        <zzm-turntable :prizeListProp="prizeList" :countProp="countProp" @draw="draw"></zzm-turntable>
    </div>
    </template>

    <script>
    export default {
    name: "Turntable",

    data() {
        return {
        prizeList: [
            {
            icon: require("../../../../public/assets/img/bean_500.png"), // 奖品图片
            name: "鱼香茄子", // 奖品名称
            color: "blue",
            isPrize: 1 // 该奖项是否为奖品
            },
            {
            icon: require("../../../../public/assets/img/bean_five.png"),
            name: "手撕鸡",
            color: "red",
            isPrize: 1
            },
            {
            icon: require("../../../../public/assets/img/bean_one.png"),
            name: "可乐鸡翅",
            color: "green",
            isPrize: 1
            }
           
        ],
        countProp: 8
        };
    },
    methods: {
        draw(e) {
        console.log(e);
        }
    }
    };
    </script>
  </highlight-code>
</Common-Democode>


### Turntable Attributes

| 参数       | 中文描述           | 类型         | 可选择         | 默认值         | 
| ----------------- |:-------------:| -----------------:| --------------------:| --------:| 
| prizeListProp          | 配置选项，具体见下表 | `Array<object>` | -- | -- |
| countProp         | 旋转圈数      |   `number` |    --    | 3 |


### Turntable Events
| 事件名称       | 中文描述           | 回调参数         | 
| ----------------- |:-------------:| -----------------:| 
| draw          | 当大转盘选中奖品时触发 | 选中节点的值与剩余圈数(countProp)组成的数组 | 


### PrizeListProp

| 参数       | 中文描述           | 类型         | 可选择         | 默认值         | 
| ----------------- |:-------------:| -----------------:| --------------------:| --------:| 
| icon          | 该节点的图片 | `string` | -- | -- |
| name         | 该节点的名字      |   `string` |    --    | -- |
| color          | 该节点的背景颜色 | `string` | -- | -- |
| isPrize         | 该节点是否为奖品      |   `number` |    1 / 0    | 0 |
