<template>
    <div>
<h1 v-if="id">edit product</h1>
<h1 v-else>Add Product</h1>
<h1>{{id}}</h1>
    <form action="" @submit.prevent="this.id?HandlePutReq():HandlePostReq()">
        <div class="mb-3">
        <label for="title" class="form-label">Title:</label>
        <input type="text" class="form-control" v-model.trim.lazy="title">
        </div>
        <div class="mb-3">
        <label for="price" class="form-label">Price:</label>
        <input type="number" class="form-control" v-model.number.lazy="price">
        </div>
        <div class="mb-3">
        <label for="description" class="form-label">Description:</label>
        <textarea class="form-control" rows="3" v-model.trim.lazy="description"></textarea>
        </div>
        <div class="mb-3">
        <label for="discountPercentage" class="form-label">Discount Percentage:</label>
        <input type="number" class="form-control" v-model.number.lazy="discountPercentage">
        </div>
        <div class="mb-3">
        <label for="rating" class="form-label">Rating:</label>
        <input type="number" class="form-control" v-model.number.lazy="rating">
        </div>
        <div class="mb-3">
        <label for="stock" class="form-label">Stock:</label>
        <input type="number" class="form-control" v-model.number.lazy="stock">
        </div>
        <div class="mb-3">
        <label for="brand" class="form-label">Brand:</label>
        <input type="text" class="form-control" v-model.trim.lazy="brand">
        </div>
        <div class="mb-3">
        <label for="category" class="form-label">Category:</label>
        <input type="text" class="form-control" v-model.trim.lazy="category">
        </div>
        <div class="mb-3">
        <label for="thumbnail" class="form-label">Thumbnail:</label>
        <input type="text" class="form-control" v-model.trim.lazy="thumbnail">
        </div>
        <div class="mb-3">
        <label for="image" class="form-label">Upload Image:</label>
        <input type="file" class="form-control" id="image" @change="handleImageUpload">
        </div>
    <button>Submit</button>
    </form>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "AddProduct",
        data(){
            return{
            title:"",
            price:0,
            description:"",
            discountPercentage:0,
            rating:0,
            stock:0,
            brand:"",
            category:"",
            thumbnail:"",
            images:[],
            id:""
            }
        },
        created(){
            this.id = this.$route.params.id
            if(this.id){
            this.GetPrdById();
            }
        },
        methods:{
            HandlePostReq(){
            axios.post(" http://localhost:2000/products",{
                title:this.title,
                price:this.price,
                description:this.description,
                discountPercentage:this.discountPercentage,
                rating:this.rating,
                stock:this.stock,
                brand:this.brand,
                category:this.category,
                thumbnail:this.thumbnail,
                images:this.images,
            })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            this.$router.push("/products")
            },
            GetPrdById(){
            axios.get(`http://localhost:2000/products/${this.id}`)
            .then(p=>{
                this.description = p.data.description,
                this.discountPercentage = p.data.discountPercentage,
                this.rating = p.data.rating,
                this.stock = p.data.stock,
                this.brand = p.data.brand,
                this.category = p.data.category,
                this.thumbnail = p.data.thumbnail,
                this.images = p.data.images
            })
            },
            HandlePutReq(){
            axios.put(`http://localhost:2000/products/${this.id}`,{
                title:this.title,
                price:this.price,
                description:this.description,
                discountPercentage:this.discountPercentage,
                rating:this.rating,
                stock:this.stock,
                brand:this.brand,
                category:this.category,
                thumbnail:this.thumbnail,
                images:this.images,
            })
            .then(res=>{

                console.log(res);
                this.$router.push("/products")
            })
            .catch(err=>console.log(err))


            },
            handleImageUpload(event) {
            const file = event.target.files[0];
            this.images = file;
            }
        }
    }
</script>

<style scoped>

</style>