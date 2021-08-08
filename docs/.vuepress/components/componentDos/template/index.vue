

<template>
  <div :class="{ 'template-content' : code}">
    <slot></slot>
  </div>
</template>
<script>
export default {
    name: 'Template',
    props:{
      code: {
        type: Number,
        default: 0
      }
    }
}
</script>

<style scoped>
.template-content{
  width: 100%;
  height: 50px;
  background: #F2F2F2;
  display: flex;
  align-items: center;
}
.bold{
    font-weight: bold;
    margin-left: 10px;
    
}
</style>
