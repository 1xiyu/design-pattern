// qutoe: http://www.cnblogs.com/humin/p/4556820.html


function UserClass(name,age,friends){
    this.name = name;
    this.age = age;
    this.friends = friends;
}

UserClass.prototype.sayFriends = function(){
    console.log(this.friends);
}

// first  prototype

// function User(){

// }

// User.prototype = new UserClass();
// User.prototype.name = '1xiyu';


// var user1 = new User();
// console.log(user1)
// console.log(user1.sayFriends());


// second constructor
// function User(name,age,friends){
//     UserClass.apply(this,[name,age,friends]);
// }

// var user1 = new User('1xiyu',18,['a','b']);
// var user2 = new User('litchi','23',['c','d']);

// console.log(user1);
// console.log(user2);
// console.log(user1.sayFriends());
// console.log(user2.sayFriends());

// third instance
// function User(name,age,friends){
//     var instance = new UserClass();
//     instance.name = name;
//     instance.age = age;
//     instance.friends = friends;
//     return instance;
// }

// var user1 = new User('1xiyu',18,['a','b']);
// console.log(user1);
// console.log(user1.sayFriends);

// fourth clone 
function User(name,age,friends){
    var user = new UserClass();
    for(var p in user){
        User.prototype[p] = user[p];
    }
    this.name = name;
    this.age = age;
    this.friends = friends; 
}

var user1 = new User('1xiyu',18,['a','b']);
console.log(user1);
//fifth two

// function User(name,age,friends){
//     UserClass.apply(this,[name,age,friends]);
// }

// User.prototype = new UserClass();

// var user1 = new User('1xiyu',18,['a','b']);
// var user2 = new User('litchi','23',['c','d']);

// console.log(user1);
// console.log(user2);
// console.log(user1.sayFriends());
// console.log(user2.sayFriends());

//  sixth parasitic  perfect

// function User(name,age,friends){
//     UserClass.apply(this,[name,age,friends]);
// }

// (function(){
//     var Super = function(){};
//     Super.prototype = UserClass.prototype;
//     User.prototype = new Super();
// })();
// User.prototype = new UserClass();

// var user1 = new User('1xiyu',18,['a','b']);
// var user2 = new User('litchi',23,['c','d']);

// console.log(user1);
// console.log(user2);
// console.log(user1.sayFriends());
// console.log(user2.sayFriends());