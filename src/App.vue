<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>Using local filter "to-upperCasae":{{name | to-upperCase }}</p>
                <p>Using global filter "to-lowerCasae": {{name | to-upperCase | to-lowerCase}}</p>
                <br>
                <input v-model="filterText">
                <ul>
                    <li v-for="x in filteredFruits">{{x}}</li>
                </ul>

                <button v-on:click="searchNames">Click</button>
                <p>{{val}}</p>

                <app-list></app-list>
                <app-list2></app-list2>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import List2 from './List2.vue';

    export default {
        components:{
            'app-list':List,
            'app-list2':List2,
        },
        data(){
            return{
                name:'Hello',
                fruits:['Apple','Mango','Orange','Banana','Mellon'],
                filterText:'',
                val:'',
            };
        },
        filters:{
            'to-upperCase'(value){
                return value.toUpperCase();
            }
        },
        computed:{
            filteredFruits() {
                return this.fruits.filter(this.searchFruits);
                // return this.fruits.filter(  (element)=>{ return element.match(this.filterText); } );
            }
        },
        methods:{
            searchFruits(element){
                return element.match(this.filterText);
            },
            searchNames(){
                 this.val=this.name.match(this.filterText);
            }
        }
    }
</script>

<style>

</style>
