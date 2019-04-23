import Vue from 'vue/dist/vue.esm'; 
import App from './App.vue';


const app = new Vue({
    render: h => h(App)
   }).$mount('#app');