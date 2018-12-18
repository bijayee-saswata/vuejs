new Vue({
    el: '#vue-app',
    data: {
        name : 'hello',
        website: 'www.google.com',
        num: 25,
        x: 0,
        y: 0
    },
    methods: {
        greet : function(msg){
            return "From : "+ msg+ " says "+ this.name ;
        },
        add : function(){
            return this.num++;
        } ,
        update: function(event){
            this.x = event.offsetX,
            this.y = event.offsetY
        }
    }
});