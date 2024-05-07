<template>
    <div>
    <h1>Products</h1>
    
    <div class="card" style="width: 18rem; display: inline-block;"  v-for="p in prds" :key="p.id">
    <img src="p.images[0]" class="card-img-top" alt="Product Image">
    <div class="card-body">
        <h5 class="card-title">{{p.title}}</h5>
        <p class="card-text">{{p.price}} LE</p>
        <p class="card-text">{{p.description}}</p>
        <button class="btn btn-dark" @click="HandleDelete(p.id)">del</button>
        <router-link class="btn btn-dark" :to="`/products/${p.id}`">see more..</router-link>
        <router-link class="btn btn-dark" :to="`/add/${p.id}`">Edit..</router-link>
    </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "ProductsPage",
        data(){
            return{
            prds:[]
            }
        },
        methods:{
            GetAllPrds(){
            axios.get(" http://localhost:2000/products")
            .then(res=>{console.log(res.data);
                this.prds = res.data;
                console.log(this.prds);
            })
            .catch(err=>console.log(err))
            },
            HandleDelete(id){
            axios.delete(` http://localhost:2000/products/${id}`)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            this.GetAllPrds();
            },
            
        },
        created(){
            this.GetAllPrds();// Automatically fetch products when the component is created
        }
    }
</script>

<style scoped>

</style>