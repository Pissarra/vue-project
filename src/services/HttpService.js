import Vue from 'vue'
import AutenticacaoService from './AutenticacaoService'

const URL_BASE = 'http://localhost:3000'

export default {
    login (user, password) {
        return this.get('/auth?' + user + '&password' + password)
    },
    get (url) {
        let header = {headers: this.autorizacao(), timeout: 100000}
        let request = Vue.axios.get(URL_BASE + url, header)
        return new Promise((resolve, reject) => {
            request.then((response) => {resolve(response)}).catch((error) => {reject(error)})
        })
    },
    post (url, objeto) {
        let header = { headers: this.autorizacao(), timeout: 100000 }
        let request = Vue.axios.post(URL_BASE + url, objeto, header)
        return new Promise((resolve, reject) => {
            request.then((response) => {resolve(response)}).catch((error) => {reject(error)})
        })
    },
    autorizacao () {
        return AutenticacaoService.estaAutenticado() ? {'Authorization': 'Bearer ' + AutenticacaoService.getTkn()} : {}
    }
}