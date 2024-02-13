<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"><p>Find the connections</p></div>
                    <div class="card-body">
                        <div class="connections-game-wrapper">
                            <div v-for="word in displayWords"
                                 @click="chooseWord(word)"
                                 :class="this.selected.includes(word) ? 'connections-word-box selected' : 'connections-word-box'" :key="word">
                                <span>{{ word }}</span>
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
    const MAX_ATTEMPTS = 5;
    export default {
        data: function() {
            return {
                referenceWords : {
                    'animals': ['cat', 'dog', 'rat', 'bat'],
                    'emotions': ['sad', 'angry', 'happy', 'fear'],
                    'bluethings': ['sky', 'whale', 'berries', 'cheese'],
                    'food': ['bread', 'beef', 'lamb', 'chocolate'],
                },
                words : {},
                displayWords: null,
                matches: [],
                attemptsLeft: MAX_ATTEMPTS,
                selected: [],
                correctWords: [],
            }
        },
        created() {
            Object.assign(this.words, this.referenceWords)

            this.displayWords = Object.values(this.words).flatMap(arr => arr);
            this.shuffleWords();
        },
        mounted() {
            // console.log(this.getAllWords())
        },
        methods:{
            chooseWord : function(word) {
                if(this.attemptsLeft <= 0 || this.selected.length > 4) return;

                if(this.selected.includes(word)) {
                    this.selected = this.selected.filter(elem => elem !== word)
                    return;
                }
                if(this.selected.length >= 4) return;


                this.selected.push(word);

                if(this.selected.length >= 4) {
                    this.checkForMatch();
                    this.selected = [];
                }

            },
            getAllWords : function() {
                return Object.values(this.words).flatMap(arr => arr);
            },
            checkForMatch : function() {
                let words = [];
                Object.values(this.words).forEach((value, index) => {
                    words.push(value[index])
                });

                for (const word in this.words) {
                    if(this.words[word].sort().join(',') === this.selected.sort().join(',')){
                        this.correctWords.word = this.words[word]

                        delete this.words[word]

                        this.displayWords = Object.values(this.words).flatMap(arr => arr);
                        this.shuffleWords()

                        this.selected = [];

                        if(!this.words.length) {
                            return this.completeGame();
                        }

                        return alert('same members');
                    }
                }


                this.attemptsLeft --;
            },
            completeGame() {

            },
            resetGame() {
                this.selected = [];
                Object.assign(this.words, this.referenceWords)
                this.attemptsLeft = MAX_ATTEMPTS;
                this.displayWords = Object.values(this.words).flatMap(arr => arr);
                this.shuffleWords();
            },
            shuffleWords() {
                let arr = Object.values(this.words).flatMap(arr => arr);

                let currentIndex = arr.length,  randomIndex;
                while (currentIndex > 0) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;
                    [arr[currentIndex], arr[randomIndex]] = [
                        arr[randomIndex], arr[currentIndex]];
                }

                this.displayWords = arr;
            }
        }
    }
</script>

<style lang="scss" scoped>
.connections-game-wrapper {
    display: flex;
    gap: 0.3rem;
    flex-wrap: wrap;
    justify-content: center;
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
