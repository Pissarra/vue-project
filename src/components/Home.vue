<template>
    <div>
        <p>Home!</p>
        <p>{{ autenticado ? 'Usuário autenticado': 'Usuário não autenticado'}}</p>
    </div>
</template>
<script>
    import AutenticacaoService from '../services/AutenticacaoService'
    export default {
        name: 'home',
        computed: {
            autenticado () {
                return AutenticacaoService.estaAutenticado()
            }
        }
    }
</script>