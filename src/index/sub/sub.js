import './.stable/index.scss';
import Vue from 'vue';
import sub from './sub.vue';
new Vue({
    el: '#sub',
    render: h=>h(sub),
}); 
