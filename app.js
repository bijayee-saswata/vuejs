new Vue({
    el: '#vue-app',
    data: {
        availabel: true,
        nearby : false,
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        error: false,
        Success:false,
        items:['one','two','three'],
        objs: [
            {name:'abc',age:20},
            {name:'bcd',age:25},
            {name:'pqr',age:21}
        ]

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
        },

        compClasses: function(){
            return {
                availabel : this.availabel,
                nearby : this.nearby
            }
        }
    }
});