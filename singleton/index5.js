var Universe;

(function(){
    var instance;
    Universe = function(){
        if(instance){
            return instance;
        }

        instance = this;

        this.time = '11.52';
    }
})();

var uni1 = new Universe();
var uni2 = new Universe();
console.log(uni1 === uni2);
uni1.time = 123;
console.log(uni1.time);
console.log(uni2.time);