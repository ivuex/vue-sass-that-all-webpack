import './.stable/index.scss';
import Vue from 'vue';
import linkConfig from './linkConfig.vue';
new Vue({
    el: '#link-config',
    render: h=>h(linkConfig),
}); 
