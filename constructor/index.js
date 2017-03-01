// 构造函数，用于创建特定模式的对象
function UserClass(name,age,friends){
    this.name = name;
    this.age = age;
    this.friends = friends;
    this.sayFriends = function(){
        console.log(this.friends);
    }
}


// 继承方式 extend.js five methods;

