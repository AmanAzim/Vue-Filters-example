export const fruitMixin={
    data(){
        return{
            fruits:['Apple','Mango','Orange','Banana','Mellon'],
            filterText:'',

        };
    },
    computed:{
        filteredFruits() {
            return this.fruits.filter(  (element)=>{ return element.match(this.filterText); } );
        }
    },
    created(){
        console.log("Mixin created");
    }
}