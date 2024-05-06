<template>
    <div>
<h1>Home</h1>
<FormPage @send="handleFormSubmission"/>

<div class="row justify-content-evenly mt-4">
    <div class="col-4">
        <button class="btn btn-dark" @click="flag = 'admin'">Admins </button>
    </div>
    <div class="col-4">
        <button class="btn btn-dark" @click="flag = 'user'">Users</button>
    </div>
</div>

<div v-if="flag==='admin'">
    <AdminsTable :adminsData = "admins"/>
</div>
    
<div v-else-if="flag==='user'">
    <UsersTable :usersData = "users"/>
</div>


    </div>
</template>

<script>
import FormPage from './FormPage';
import AdminsTable from './AdminsTable';
import UsersTable from './UsersTable';

    export default {
        name: "HomePage",
        components: {FormPage, AdminsTable, UsersTable},
        data() {
            return {
            flag: "admin",
            users:[],
            admins:[],
            submittedForm: null
            };
        },
        methods:{
            handleFormSubmission(formValues) {
            
            let role = formValues.role;
            this.submittedForm = formValues;

            if (role=='admin'){
                this.admins.push(formValues)
            } else {
                this.users.push(formValues)
            }


            console.log("Admins",this.admins)
            console.log("users",this.users)
            }
        }
    }
</script>

<style scoped>

</style>