    var data = {
        id: "htmlCode",
        name: 'Vue.js',
        greeting: true,
        htmlCode: '<h2 style="display:inline-block">code</h2>',
        number: 1,
        message: 'ABCDEFG',
        url: 'http://cn.vuejs.org',
        a:1
    };

    var vm = new Vue({
        el: '#el',
        data: data,
        //this指向vm实例
        created: function() {
            console.log(this.name);
        }
    });
    var vm2 = new Vue({
        el: "#el2",
        data: data,
        methods: {
            doSomething: function() {
                this.name = 'doSomething';
            }
        }
    });

    var vm3 = new Vue({
        el: '#el3',
        data: data
    });

    var vm4 = new Vue({
        el: '#el4',
        data: data
    });

    var vm5 = new Vue({
        el: '#el5',
        data: data,
        computed: {
            b: function() {
                return this.a + 1;
            }
        }
    });

    //观察name属性值的变化
    vm.$watch('name', function(newVal, oldVal) {
        console.log(newVal + oldVal);
    });
