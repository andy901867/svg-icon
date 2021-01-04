<template>
    <nav class="bg-light">
        <div class="p-2 d-flex align-items-center">
            <div class="mr-3">
                <button class="btn btn-primary btn-sm mr-1">
                    <span class="d-block">Import Icons</span>
                    <small class="d-block">(SVG File)</small>
                </button>
                <button class="btn btn-primary btn-sm">
                    <span class="d-block">Import Project</span>
                    <small class="d-block">(JSON File)</small>
                </button>
            </div>
            <div class="input_search mr-3">
                <input type="text" class="form-control">
                <svg width="16" height="16" fill="currentColor" class="input_search_icon">
                    <use xlink:href="/icons.svg#search"/>
                </svg>
            </div>
            <div>
                <button class="btn btn-secondary btn-sm mr-1">
                    <svg width="16" height="16" fill="currentColor">
                        <use xlink:href="/icons.svg#backspace-fill"/>
                    </svg>
                </button>
                <button class="btn btn-secondary btn-sm">
                    <svg width="16" height="16" fill="currentColor">
                        <use xlink:href="/icons.svg#backspace-reverse-fill"/>
                    </svg>
                </button>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    @import '../assets/scss/variables/custom.scss';
    .input_search{
        position:relative;
        
        & input[type="text"]{
            padding-left: 2rem;
        }

        & .input_search_icon{
            position:absolute;
            top:50%;
            left: .5rem;
            transform:translateY(-50%);
        }
    }
</style>