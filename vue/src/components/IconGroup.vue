<template>
    <section class="py-4">
        <div class="d-flex justify-content-between align-items-end mb-2">
            <h2 class="mb-0">{{category.categoryName}}</h2>
            <button class="btn btn-sm" :class="isAllSelected ? 'btn-danger':'btn-primary'" @click="pickInBulk()">{{isAllSelected? 'Deselect':'Select'}} All</button>
        </div>
        <div class="row no-gutters">
            <div class="col-xl-1 col-lg-2 col-md-2 col-sm-3 col-4" v-for="icon in icons" :key="icon.iconId">
                <label class="icon_selector">
                    <input type="checkbox" :value="icon.iconId" v-model="checkedIcons">
                    <div class="icon_selector_style d-flex flex-column align-items-center px-1 py-3">
                        <svg width="32" height="32" fill="currentColor">
                            <use xlink:href="/icons.svg#backspace-fill"/>
                        </svg>
                        <span class="fz13">Icon Name</span>
                    </div>
                </label>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'IconGroup',
    props:{
        icons:{
            type: Array,
            default:function(){
                return [
                    {iconId:'id1',iconName: 'iconName'},
                    {iconId:'id2',iconName: 'iconName'},
                    {iconId:'id3',iconName: 'iconName'},
                    {iconId:'id4',iconName: 'iconName'},
                    {iconId:'id5',iconName: 'iconName'},
                    {iconId:'id6',iconName: 'iconName'},
                    {iconId:'id7',iconName: 'iconName'}
                ]
            }
        },
        category:{
            type: Object
        }
    },
    data:function(){
        return{
            checkedIcons:[],
        }
    },
    watch:{
        checkedIcons(){
            let selectedIcon = {
                categoryId:this.category.categoryId,
                icons: this.icons.filter(icon=>{return this.checkedIcons.includes(icon.iconId)})
            }
            this.$emit('selectIcons',selectedIcon);
        }
    },
    computed:{
        iconsCount(){
            return this.icons.length;
        },
        isAllSelected(){
            return this.checkedIcons.length == this.iconsCount;
        }
    },
    methods:{
        pickInBulk(){
            if(this.checkedIcons.length<this.iconsCount){
                //Select All
                this.checkedIcons = [];
                this.icons.forEach((icon)=>{
                    this.checkedIcons.push(icon.iconId);
                });
            }
            else if(this.checkedIcons.length == this.iconsCount){
                //Deselect All
                this.checkedIcons = [];
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables/custom.scss';
    .icon_selector{
        width:100%;
        height: 100%;
        margin-bottom:0;
        cursor: pointer;
        user-select: none;

        & input[type="checkbox"]{
            display:none;

            &:checked+.icon_selector_style{
                border: 1px solid $info;
                background-color: #fff;
            }
        }
        & .icon_selector_style{
            border: 1px solid transparent;
            border-radius: 2px;
        }
    }
</style>