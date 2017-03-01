// 单例一般是用在系统间各种模式的通信协调上

var SingletonTest = (function(){
    function Singleton(args){
        this.args = args || {};
        this.name = 'SingletonTest';
        this.pointX = this.args.pointX || 3;
        this.pointY = this.args.pointY || 6;
    }
    var instance;
    var _static = {
        name: 'SingletonTest',
        getInstance: function(args){
            if(instance == undefined){
                instance = new Singleton(args);
            }
            return instance;
        }
    }
    return _static;
})();

var singleTest = SingletonTest.getInstance({pointX:5});
console.log(singleTest.pointX);