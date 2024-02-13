<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"><p>Wordle</p></div>
                    <div class="card-body">
                        <div class="connections-game-wrapper">
                            <div v-for="i in attempts" :key="i">
                                5
                                 <CharacterBlockComponent :charact />
                            </div>
                        </div>
                        <div class="characters">
                            <div class="character" v-for="character in characters.split('')" :key="character" >
                                {{ character }}
                            </div>
                        </div>
                        <div class="connections-game-controls">
                            <div class="attempts">
                                <p>{{ attemptsLeft }} attempts remaining.</p>
                            </div>
                            <div class="buttons">
                                <div><button @click="resetGame()" class="btn btn-outline-dark">Reset</button></div>
                                <div><button @click="shuffleWords()" class="btn btn-outline-dark">Shuffle</button></div>
                                <div><button class="btn btn-outline-dark">test</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CharacterBlockComponent from './CharacterBlockComponent.vue';

    export default {
    components: [
        CharacterBlockComponent
    ],
    data: function () {
        return {
            characters: 'ABC',
            wordArray: ['C','R','A','T','E'],
            word: 'CRATE',
            attempts: [{},{},{},{},{}],
            maxAttempts: 5,
        };
    },
    computed: {
        attemptsLeft() {
            return this.maxAttempts - this.attempts.length
        },
    },
    created() {
    },
    mounted() {
        // console.log(this.getAllWords())
    },
    methods: {},
}
</script>

<style lang="scss" scoped>




.connections-game-wrapper {
    display: flex;
    gap: 0.3rem;
    flex-wrap: wrap;
    justify-content: center;
}

.characters {
    display: flex;
    gap: 0.3rem;
    justify-content: center;

    .character {

        &:hover {
            cursor: pointer
        }
    }
    
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
