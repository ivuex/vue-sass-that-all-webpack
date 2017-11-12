import './.stable/index.scss';
import Vue from 'vue';
import vhtml from './vhtml.vue';
new Vue({
    el: '#vhtml',
    render: h=>h(vhtml),
}); 
