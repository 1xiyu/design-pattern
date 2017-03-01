function Universe(){
    // cache
    var instance = this;
    this.time = '11.44';
    // rewrite
    Universe = function(){
        return instance;
    }
}

var uni1 = new Universe();
var uni2 = new Universe();
console.log(uni1 === uni2);