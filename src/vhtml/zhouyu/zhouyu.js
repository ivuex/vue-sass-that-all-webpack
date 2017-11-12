import './.stable/index.scss';
import Vue from 'vue';
import zhouyu from './zhouyu.vue';
new Vue({
    el: '#zhouyu',
    render: h=>h(zhouyu),
}); 
