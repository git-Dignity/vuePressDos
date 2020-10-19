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


<script>
export default {
  name: "buttonWrap",
  data() {
    return {
    
    };
  },
  methods: {
   
  }
};
</script>

<style lang="less" scoped>
.btn-item {
  display: inline-block;
  margin: 10px;
}
</style>

