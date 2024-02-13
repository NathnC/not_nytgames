<template>
    <div class="character-box" v-text="character || ' '" @click="$emit('characterClicked', character)"></div>
</template>

<script>
 
    export default {
        props: {
            character: {
                type: String,
                required: true,
            }
        },
        created() {
          
        },
        mounted() {
            // console.log(this.getAllWords())
        },
        methods:{
            
        }
    }
</script>

<style lang="scss" scoped>


.character-box {
    flex: 1 0 21%;
    background: #eee;
    color: black;
    padding: .3rem;
    box-sizing: border-box;
    text-transform: uppercase;
    aspect-ratio: 1 / 1 ;
    text-align: center;
    vertical-align: middle;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 900;
    border-radius: 12px;

    border: solid 2px rgb(58, 58, 60);

    &:hover {
        cursor: pointer;
    }

    &.selected {
        background: #ffea7a;
    }
}


</style>
