// 多对象都具有发布订阅功能
var observer  = {
    addSubscriber: function(callback){
        this.subscribers[this.subscribers.length] = callback;
    },
    removeSubscriber: function(callback){
        for(var i = 0; i < this.subscribers.length; i ++){
            if(this.subscribers[i] === callback){
                delete this.subscribers[i];
            }
        }
    },
    publish: function(what){
        for(var i = 0; i < this.subscribers.length; i++){
            if(typeof this.subscribers[i] == 'function'){
                this.subscribers[i](what);
            }
        }
    },
    //  将o具有观察者功能
    make: function(o){
        for(var i in this){
            o[i] = this[i];
            o.subscribers = [];
        }
    }
}


var blogger = {
    recommend: function(id){
        var msg = 'litchi a new page:' + id;
        this.publish(msg);
    }
}

var user = {
    voted: function(id){
        var msg = 'someone vote for you' + id;
        this.publish(msg);
    }
}

observer.make(blogger);
observer.make(user);

var tom = {
    read: function(what){
        console.log('tom see' + what);
    }
}

var mom = {
    show: function(what){
        console.log('mom see' + what);
    }
}

blogger.addSubscriber(tom.read);
blogger.addSubscriber(mom.show);
blogger.recommend(123);

blogger.removeSubscriber(mom.show);
blogger.recommend(456);

user.addSubscriber(tom.read);
user.voted(454);