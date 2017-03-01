function Universe(){
    if(typeof Universe.instance === 'object'){
        return Universe.instance;
    }
    // other contents
    this.time = '11:33';

    // cache
    Universe.instance = this;
    //  隐式返回this 
}

var uni1 = new Universe();
var uni2 = new Universe();
console.log(uni1 === uni2);