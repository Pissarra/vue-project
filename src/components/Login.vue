<template>
    <div class="hello">
        <div class="form-group">
            <label for="user">Usuário</label>
            <input id="user" type="text" class="form-control" v-model="user">
        </div>
        <div class="form-group">
            <label for="password">Senha</label>
            <input id="password" type="password" class="form-control" v-model="password">
        </div>
        <button @click="login" class="btn btn-default">Login</button>
        <p>{{resultadoLogin}}</p>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
                user: '',
                password: ''
            }
        }
    }
</script>