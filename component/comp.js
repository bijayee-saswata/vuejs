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
        food: 'food'
    },
    methods:{
        show: function(){
            console.log(this.$refs.input.value);
            this.food = this.$refs.input.value;
        }
    }
});
var two = new Vue({
    el: '#v-app-two',
    data:{

    },
    methods:{
        
    }
});