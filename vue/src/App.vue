<template>
  <div id="app">
    <keep-alive>
      <router-view @selectIcons="requireSelectedIcons" :selectedIcons="totalSelectedIcons"></router-view>
    </keep-alive>
    <div class="nav_bar">
      <router-link to="/select" class="nav_bar_item">
        Select<span v-show="totalSelectedIconsCount>0">({{totalSelectedIconsCount}})</span>
      </router-link>
      <router-link to="/download" class="nav_bar_item">
        Download SVG
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      totalSelectedIcons:{}
    }
  },
  computed:{
    totalSelectedIconsCount(){
      var count = 0;
      for(var i in this.totalSelectedIcons){
        count+= this.totalSelectedIcons[i].length;
      }
      return count;
    }
  },
  methods: {
    requireSelectedIcons(data){
      this.$set(this.totalSelectedIcons,data.categoryId,data.icons);
    }
  },
}
</script>

<style lang="scss">
@import './assets/scss/variables/custom.scss';
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav_bar{
  display: flex;
  position: fixed;
  left:0;
  bottom: 0;
  text-align: center;
  width:100%;
  border-top: 1px solid #bbb;
  background-color: #f5f5f5;
}
.nav_bar_item{
  flex:1;
  padding: .75rem .25rem;
  border-top: 5px solid transparent;
  color: #888;

  &.router-link-active{
    border-top: 5px solid $info;
    color: $info;
    font-weight: bold;
  }
  &:hover{
    text-decoration: none;
  }
}
</style>
