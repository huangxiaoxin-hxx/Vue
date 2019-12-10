<template>
<div class="input-suffix" >
  <router-link to="/search" class="input" :class="'input'+color" tag="div">
    <img src="../../assets/icon/sousuoblack.png" alt="">
    <span v-text="inputValue">
    </span>
  </router-link>
</div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    inputValue: {
      type: String,
      default: '请输入搜索内容'
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/fun';
.input-suffix
  flex 7
  z-index 1000
  .input
    box-shadow .1px .1px .1px .1px #aaa
    border-radius 50px 0px 50px 50px
    position: relative;
    box-sizing: border-box;
    display: flex;  
    cursor: pointer; 
    background-color #fff
    top: 10px; 
    width: 100%; 
    height: 32px; 
    padding-left: 12px;
    padding-top 6px
    margin 0 auto
  .inputyellow
      background-color #fff6d5
    img
      display: flex; 
      width: 15px; 
      height: 15px; 
      margin-right: 3px;
    span
      white-space: pre-wrap; 
      border: 0px solid black; 
      position: relative; 
      box-sizing: border-box; 
      display: block; 
      -webkit-box-orient: vertical; 
      flex-direction: column; 
      align-content: flex-start; 
      flex-shrink: 0; 
      font-size: 14px; 
      color: rgb(102, 102, 102);
</style>