<template>
    <div class="container mt-4">
        <section class="mb-4" v-for="category in selectedIcons" :key="category.categoryId">
            <div class="d-flex justify-content-between align-items-end">
                <h3 class="mb-0">from {{category.categoryName}}</h3>
                <span>{{category.icons.length}} icons</span>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6 col-12" v-for="icon in category.icons" :key="icon.iconId">
                    <div class="d-flex align-items-center">
                        <svg width="32" height="32" fill="currentColor">
                            <use v-bind:xlink:href="category.path+'#'+icon.iconName"/>
                        </svg>
                        <input type="text" class="form-control" v-model="icon.iconName">
                    </div>
                </div>
            </div>
        </section>
        <div class="d-flex justify-content-center">
            <button class="btn btn-lg btn-primary" @click="downloadSvg()">Download</button>
        </div>
    </div>
</template>

<script>
export default {
    props:['selectedIcons'],
    data:function(){
        return{
            
        }
    },
    methods:{
        downloadSvg(){
            
        }
    }   
}
</script>

<style lang="scss">
    
</style>