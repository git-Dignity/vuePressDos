<template>
  <div class="demo-button">
    <div>
      <zzm-btn class="btn-item" :loading="isClick" type="primary" @click="loadClick">主要按钮</zzm-btn>
      <zzm-btn class="btn-item" :loading="isClick" type="success" @click="loadClick">成功按钮</zzm-btn>
      <zzm-btn class="btn-item" :loading="isClick" type="info" @click="loadClick">信息按钮</zzm-btn>
      <zzm-btn class="btn-item" :loading="isClick" type="warning" @click="loadClick">警告按钮</zzm-btn>
      <zzm-btn class="btn-item" :loading="isClick" type="danger" @click="loadClick">危险按钮</zzm-btn>
    </div>
  </div>
</template>


<script>
export default {
  name: "buttonWrap",
  data() {
    return {
      isClick: false
    };
  },
  methods: {
    loadClick() {
      this.isClick = true;
      setTimeout(() => {
        this.isClick = false;
      }, 2000);
    }
  }
};
</script>

<style lang="less" scoped>
.btn-item {
  display: inline-block;
  margin: 10px;
}
</style>

