new Vue({
    el: '#vue-app',
    data: {
        
        x: 0,
        y: 0,
        a: 0,
        b: 0
    },
    methods: {

        update: function(event){
            this.x = event.offsetX,
            this.y = event.offsetY
        }
        
    },
    computed:{
        add : function(){
            console.log("a");
            return this.a;        
        },
        sub : function(){
            console.log("b");
            return this.b;      
        }
    }
});