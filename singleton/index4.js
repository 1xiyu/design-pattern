function Universe(){
    var instance;
    Universe = function(){
        return instance;
    }
    instance = new Universe();
    instance.constructor = Universe();
    instance.time = '11:49';
    return instance;
}


//test

var uni1 = new Universe();
var uni2 = new Universe();
console.log(uni1 === uni2);

// 添加原型属性  共享
Universe.prototype.nothing = true;

var uni = new Universe();

Universe.prototype.everything = true;

var uni2 = new Universe();

console.log(uni.nothing); // true
console.log(uni2.nothing); // true
console.log(uni.everything); // true
console.log(uni2.everything); // true
console.log(uni.constructor === Universe); // true