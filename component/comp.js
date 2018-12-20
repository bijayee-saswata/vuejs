Vue.component('greet', {
    template: '<p> hello {{ name }} <button v-on:click="changeName()">changeName</button></p>',
    data: function(){
        return {
            name: 'abc'
        };
    },
    methods: {
        changeName: function(){
            this.name = 'xyz'
        }
    }
});
var one = new Vue({
    el: '#v-app-one',
    data:{

    },
    methods:{

    }
});
var two = new Vue({
    el: '#v-app-two',
    data:{

    },
    methods:{
        
    }
});