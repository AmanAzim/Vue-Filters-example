<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>Using local filter "to-upperCasae":{{name | to-upperCase }}</p>
                <p>Using global filter "to-lowerCasae": {{name | to-upperCase | to-lowerCase}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:'Hello',
            };
        },
        filters:{
            'to-upperCase'(value){
                return value.toUpperCase();
            }
        }
    }
</script>

<style>

</style>
