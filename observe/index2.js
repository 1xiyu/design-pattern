//  use prototype
function Observer(){
    this.fns = [];
}

Observer.prototype = {
    subscribe: function(fn){
        this.fns.push(fn);
    },
    unsubscribe: function(fn){
        this.fns = this.fns.filter(function(el){
            if(el !== fn){
                return el;
            }
        })
    },
    update: function(o,thisObj){
        var scope = thisObj || window;
        this.fns.forEach(function(el){
            el.call(scope,o);
        })
    }
}

// test
var o = new Observer();
var f1 = function(data){
    console.log('litchi' + data + 'do working right away');
}
var f2 = function(data){
    console.log('tang' + data + 'give more salary');
}

// f1 f2 subscriber
o.subscribe(f1);
o.subscribe(f2);

// o publisher
o.update('i am coming');

// unsubscribe
o.unsubscribe(f1);
o.update('svi is coming');
