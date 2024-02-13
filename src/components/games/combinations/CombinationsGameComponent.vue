<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"><p>Find the connections</p></div>

                    <div class="card-body">

                        <div class="input">
                            &nbsp;<span v-for="character in selected" v-text="character"></span>
                        </div>

                        <div class="connections-game-wrapper">



                            <div v-for="(character, index) in characters" class="connections-word-box" @click="chooseWord(character)">
                                <span v-text="character"></span>
                            </div>
                        </div>

                        <div class="connections-game-controls">
                            <div class="buttons">
                                <button  class="btn btn-block  btn-game">Reset</button>
                                <button  class="btn btn-block  btn-game">Shuffle</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                combinations: ['test'],
                characters: ['t','e','s','t','f','g','h','v'],
                found: [],
                selected: []
            }
        },
        created() {

        },
        mounted() {
        },
        methods:{
            chooseWord : function(character) {
                // if(this.selected.length > this.characters.length) return;

                // if(this.selected.includes(character)) {
                //     this.selected = this.selected.filter(elem => elem !== character)
                //     return;
                // }

                this.selected.push(character);

                console.log(this.selected.length)
                console.log(this.characters.length)
                //this.checkForMatch();
                if(this.selected.length > this.characters.length) {
                    this.selected = [];
                }
            },
        }
    }
</script>

<style lang="scss" scoped>



.input {
    text-align: center;
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1rem;
}

.connections-game-wrapper {
    display: flex;
    gap: 0.3rem;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 30px;
}

.connections-game-controls {
    text-align: center;

    .buttons {
        display: flex;
        gap: 0.3rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    .attempts {
        padding-top: 10px;
    }
}

.connections-word-box {
    flex: 1 0 11%;
    background: #eee;
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

.btn-game {
    font-size: 1rem;
}

</style>
