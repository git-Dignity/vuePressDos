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
    loadClick() {
    //   this.isClick = true;
    //   setTimeout(() => {
    //     this.isClick = false;
    //   }, 2000);
    }
  }
};
</script>

<style lang="less" scoped>

</style>

