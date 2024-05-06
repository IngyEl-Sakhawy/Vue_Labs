<template>
    <div>
        <form  @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="name" class="form-label">Name:</label>
                <input type="text" class="form-control" id="name" v-model.trim.lazy="FormValues.name">
            </div>
            <div class="mb-3">
                <label for="age" class="form-label">Age:</label>
                <input type="number" class="form-control" id="age" v-model.trim.lazy="FormValues.age">
            </div>

            <div class="mb-3 form-check">
                <input class="form-check-input" type="radio" name="role" id="admin" value="admin" v-model="FormValues.role">
                <label class="form-check-label" for="admin" >
                    Admin
                </label>
            </div>
            <div class="mb-3 form-check">
                <input class="form-check-input" type="radio" name="role" id="user" value="user" v-model="FormValues.role">
                <label class="form-check-label" for="user">
                    User
                </label>
            </div>
            
            <button class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "FormPage",
        data(){
            return {
                FormValues: {
                name: "",
                age: "",
                role: "",
                    },
            }
        },
        methods: {
        handleSubmit() {
        this.$emit('send', {...this.FormValues});
        this.clearForm();
        },
        clearForm() {
            this.formValues = {
                name: "",
                age: "",
                role: "",
            };
            }
        }
        }
    
</script>

<style scoped>

</style>