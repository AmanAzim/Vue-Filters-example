<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

                <input v-model="filterText">
                <ul>
                    <li v-for="x in filteredFruits">{{x}}</li>
                </ul>

                <button v-on:click="fruits.push('berry')">Add fruit</button>

            </div>
        </div>
    </div>
</template>

<script>
    import {fruitMixin} from "./FruitMixin.js";

    export default {
        mixins:[fruitMixin],
        data(){
            return {

            };
        },
        created(){
            console.log("Mixin created in component List2");
        }
    }
</script>

<style>

</style>
