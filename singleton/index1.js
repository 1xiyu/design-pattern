// 其他开发语言中，单例就是保证一个类有一个实例，实现方法就是判断该类的实例是否存在，若存在直接返回，若不存在则创建之后再继续返回
// 在javascript中，单例作为命名空间提供者，从全局命名变量提供一个唯一的访问点访问该对象

// 对象字面量的方式实现
var mySingleton = {
    property1: "something1",
    property2: "something2",
    method1: function(){
        console.log('hello world');
    }
}

// 如果想要扩展,闭包暴露public方法和成员。
var mySingleton = function(){
    var private1 = "something private";
    function showPrivate(){
        console.log(private1);
    }
    return {
        public1: 'something public',
        publicMethod: function(){
            showPrivate();
        }
    }
}

var single = new mySingleton();
console.log(single.public1);    //something public
single.publicMethod();    //something private

// 使用再进行初始化 为了节约资源

var Singleton = (function(){
    var instantiated;
    function init(){
        return {
            property: 'test',
            method: function(){
                console.log('hello world');
            }
        }
    }
    return {
        getInstance: function(){
            if(!instantiated){
                instantiated = init();
            }
            return instantiated;
        }
    }
})();

