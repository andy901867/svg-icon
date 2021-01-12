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
      totalSelectedIcons:[]
    }
  },
  computed:{
    totalSelectedIconsCount(){
      var count = 0;
      this.totalSelectedIcons.forEach((item)=>{
        count+=item.icons.length;
      })
      return count;
    }
  },
  methods: {
    requireSelectedIcons(data){
      var isCategoryRepeat = false;
      this.totalSelectedIcons.forEach((category)=>{
        if(category.categoryId === data.categoryId){
          var newSelectIcons = JSON.parse(JSON.stringify(data.icons));
          var originIconIds = category.icons.map((icon)=>{return icon.iconId});
          newSelectIcons.forEach((newSelectIcon,index)=>{
            var indexInOrigin = originIconIds.indexOf(newSelectIcon.iconId);
            if(indexInOrigin>=0){
              newSelectIcons[index] = category.icons[indexInOrigin];
            }
            else{
              newSelectIcon.userIconName = newSelectIcon.iconName;
            }            
          });  
          category.icons = newSelectIcons;
          isCategoryRepeat = true;
        }
      });
      if(isCategoryRepeat === false){
        var datas = JSON.parse(JSON.stringify(data));
        datas.icons.forEach((icon)=>{
            icon.userIconName = icon.iconName;
        })
        this.totalSelectedIcons.push(datas);
      }
    }
  }
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
