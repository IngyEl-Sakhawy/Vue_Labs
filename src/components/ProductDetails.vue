<template>
    <div>
<h1>product details</h1>
    <div class="card" style="width: 100%;">
    <img src="p.images[0]" class="card-img-top" alt="Product Image one">
    <img src="p.images[1]" class="card-img-top" alt="Product Image two">
    <img src="p.images[2]" class="card-img-top" alt="Product Image three">
    <div class="card-body">
        <h5 class="card-title">{{prd.title}}</h5>
        <p class="card-text">{{prd.price}} LE</p>
        <p class="card-text">{{prd.description}}</p>
    </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "ProductDetails",
        data(){
    return{
            id:'',
            prd:{}
            }
        },
        created(){
            this.id = this.$route.params.id;
            this.GetPrdByID();
        },
        methods:{
            GetPrdByID(){
            axios.get(` http://localhost:2000/products/${this.id}`)
            .then(res=>this.prd = res.data)
            .catch(err=>console.log(err))
            }
        }
    }
</script>

<style scoped>

</style>