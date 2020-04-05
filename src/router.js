import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);



import Cadastro from './Cadastro/Cadastro.vue'
import Login from './Login/Login.vue'
import Home from './Home/Home.vue'
import Carrinho from './Carrinho/Carrinho.vue'

export default new VueRouter ({
    mode:"history",
    routes: [  
        {
            path: '/',
            name:'Home',
            component:Home
        },
        {
            path: '/Cadastro',
            name:'form',
            component:Cadastro
        },
        {
            path: '/Login',
            name:'formLogin',
            component:Login
        },
        {
            path: '/Carrinho',
            name:'formCarrinho',
            component:Carrinho
        },

        
    ]
})