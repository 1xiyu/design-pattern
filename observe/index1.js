// 发布订阅模式  一对多 多观察者同时监听一个主题对象  该主题对象变化就会通知所有的观察者对象，市值手动更新自己

// 广播通信
// 动态关联
// 耦合关系单独扩展

// apply 当一个对象改变需要同时改变其他对象
var pubsub = {};
(function(q){
    var topics = {},       // 回调函数存放的数组
        subUid = -1;
    // publish 
    q.publish = function(topic,args){

        if(!topics[topic]) return false;

        setTimeout(function(){
            var subscribers = topics[topic];
            len = subscribers ? subscribers.length : 0;
            while(len--){
                 subscribers[len].func(topic, args);
            } 
        })

        return true;
    }

    // subscribe
    q.subscribe = function(topic,func){
        if(!topics[topic]){
            topics[topic] = [];
        }
        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        })
        return token;
    }

    // unsubscribe
    q.unsubscribe = function(token){
        for(var m in topics){
            if(topics[m]){
                for(var i = 0, j = topics[m].length; i < j; i++ ){
                    topics[m].splice(i,1);
                    return token;
                }
            }
        }
        return false;
    }
}(pubsub));

var sub1 = pubsub.subscribe('example1', function (topics, data) {
    console.log(topics + ": " + data);
});

var sub2 = pubsub.subscribe('example2',function(topics,data){
    console.log(topics + ":" + data);
})
pubsub.publish('example1', 'hello world!');
pubsub.publish('example1', ['test', 'a', 'b', 'c']);
pubsub.publish('example1', [{ 'color': 'blue' }, { 'text': 'hello'}]);

pubsub.publish('example2',['i dont know']);

// setTimeout(function(){
//     pubsub.unsubscribe(sub1);
// },0)


pubsub.publish('example1','ccctest');