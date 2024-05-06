<template>
    <div>
<h3>Users Table</h3>
<table class="table">
    <thead>
        <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Role</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="user in usersData" :key="user.name">
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.role }}</td>
        </tr>
        
    </tbody>
</table>
    </div>
</template>

<script>
    export default {
        name:"UsersTable",
        props: {
            usersData: {
        type: Array,
        required: true
        }
        }
    }
</script>

<style scoped>

</style>