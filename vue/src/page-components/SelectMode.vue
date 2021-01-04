<template>
    <div id="page">
        <tool-bar></tool-bar>
        <main>
            <div class="container">
                <icon-group 
                    v-for="category in iconCategories" 
                    :key="category.categoryId"
                    :category="category"
                    :icons="category.icons"
                    @selectIcons="requireSelectedIcons">
                </icon-group>
            </div>
        </main>
    </div>
</template>

<script>
import ToolBar from '../components/ToolBar.vue'
import IconGroup from '../components/IconGroup.vue'

export default {
    name: 'SelectMode',
    components: {
        ToolBar,
        IconGroup
    },
    data(){
        return{
            iconCategories:[]
        }
    },
    created(){
        this.getAllIcons();
    },
    methods: {
        getAllIcons(){
            var response = [
                {
                    categoryId: "id1",
                    categoryName: "Bootstrap",
                    icons:[
                        {iconId:'id1',iconName: 'iconName'},
                        {iconId:'id2',iconName: 'iconName'},
                        {iconId:'id3',iconName: 'iconName'},
                        {iconId:'id4',iconName: 'iconName'},
                        {iconId:'id5',iconName: 'iconName'},
                        {iconId:'id6',iconName: 'iconName'},
                        {iconId:'id7',iconName: 'iconName'}
                    ]
                },
                {
                    categoryId: "id2",
                    categoryName: "Font Awesome",
                    icons:[
                        {iconId:'id1',iconName: 'iconName'},
                        {iconId:'id2',iconName: 'iconName'},
                        {iconId:'id3',iconName: 'iconName'},
                        {iconId:'id4',iconName: 'iconName'},
                        {iconId:'id5',iconName: 'iconName'},
                        {iconId:'id6',iconName: 'iconName'}
                    ]
                }
            ];
            this.iconCategories = response;
        },
        requireSelectedIcons(data){
            // console.log(data);
            this.$emit('selectIcons',data);
        }
    },
}
</script>

<style lang="scss">
    #page{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    main{
        flex:1;
        background-color: #f5f5f5;
    }
</style>