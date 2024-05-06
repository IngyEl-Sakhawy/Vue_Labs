<template>
    <div>
<h3>Admins Tables</h3>
<table class="table">
    <thead>
        <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Role</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="admin in adminsData" :key="admin.name">
        <td>{{ admin.name }}</td>
        <td>{{ admin.age }}</td>
        <td>{{ admin.role }}</td>
        </tr>
        
    </tbody>
</table>
    </div>
</template>

<script>
    export default {
        name: "AdminsTable",
        props: {
            adminsData: {
        type: Array,
        required: true
        }
        }
    }
</script>

<style scoped>

</style>