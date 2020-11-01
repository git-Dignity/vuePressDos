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
        },
        {
          icon: require("../../../../public/assets/img/point_five.png"),
          name: "奖品4",
          color: "red",
          isPrize: 1
        },
        {
          icon: require("../../../../public/assets/img/point_ten.png"),
          name: "奖品5",
          color: "#FF4E3A",
          isPrize: 1
        },
        {
          icon: require("../../../../public/assets/img/bean_500.png"),
          name: "奖品6",
          color: "#FF925D",
          isPrize: 1
        },
        {
          icon: require("../../../../public/assets/img/give_up.png"),
          name: "谢谢",
          color: "#FFCC72",
          isPrize: 0
        },
        {
          icon: require("../../../../public/assets/img/bean_500.png"),
          name: "奖品8",
          color: "#FE315D",
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
