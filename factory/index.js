// 工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型。
var UserClass = (function(){
    var User = function(name,age,friends){
        this.name = name;
        this.age = age;
        this.friends = friends;
    }
    return function(name,age,friends){
        return new User(name,age,friends);
    }
})();

var litchi = new UserClass('litchi',18,['tom','jack']);