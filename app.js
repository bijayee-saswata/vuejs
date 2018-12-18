new Vue({
    el: '#vue-app',
    data: {
        name : 'hello',
        website: 'www.google.com',
        num: 25
    },
    methods: {
        greet : function(msg){
            return "From : "+ msg+ " says "+ this.name ;
        },
        add : function(){
            return this.num++;
        } 
    }
});