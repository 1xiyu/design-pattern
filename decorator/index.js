// 装饰者提供比继承更有弹性的替代方案。 装饰者用用于包装同接口的对象，不仅允许你向方法添加行为，而且还可以将方法设置成原始对象调用（例如装饰者的构造函数）。
// 装饰者用于通过重载方法的形式添加新功能，该模式可以在被装饰者前面或者后面加上自己的行为以达到特定的目的。

//eg.1
function macBook(){
    this.cost = function(){
        return 1000;
    }
}

function mac2(macBook){
    this.cost = function(){
        return macBook.cost() + 1000;
    }
}

function mac3(macBook){
    this.cost = function(){
        return macBook.cost() + 10000;
    }
}

var myMac = new mac3(new mac2(new macBook()));
console.log(myMac.cost());


// eg.2

function ConcreteClass(){
    this.preformTask = function(){
        this.preTask();
        console.log('doing something');
        this.postTask();
    }
}

function abstractDecorator(decorated){
    this.preformTask = function(){
        decorated.preformTask();
    }
}

function ConcreteDecoratorClass(decorated){
    this.base = abstractDecorator;
    this.base(decorated);
    decorated.preTask = function(){
        console.log("pre-calling");
    }
    decorated.postTask = function(){
        console.log("post-calling");
    }
}

var concrete = new ConcreteClass();
var decorator1 = new ConcreteDecoratorClass(concrete);
var decorator2 = new ConcreteDecoratorClass(decorator1);

decorator2.preformTask();

// eg.3
var tree = {};
tree.decorate = function () {
    console.log('Make sure the tree won\'t fall');
};

tree.getDecorator = function (deco) {
    tree[deco].prototype = this;
    return new tree[deco];
};

tree.RedBalls = function () {
    this.decorate = function () {
        this.RedBalls.prototype.decorate(); // 第7步：先执行原型（这时候是Angel了）的decorate方法
        console.log('Put on some red balls'); // 第8步 再输出 red
        // 将这2步作为RedBalls的decorate方法
    }
};

tree.BlueBalls = function () {
    this.decorate = function () {
        this.BlueBalls.prototype.decorate(); // 第1步：先执行原型的decorate方法，也就是tree.decorate()
        console.log('Add blue balls'); // 第2步 再输出blue
        // 将这2步作为BlueBalls的decorate方法
    }
};

tree.Angel = function () {
    this.decorate = function () {
        this.Angel.prototype.decorate(); // 第4步：先执行原型（这时候是BlueBalls了）的decorate方法
        console.log('An angel on the top'); // 第5步 再输出angel
        // 将这2步作为Angel的decorate方法
    }
};

tree = tree.getDecorator('BlueBalls'); // 第3步：将BlueBalls对象赋给tree，这时候父原型里的getDecorator依然可用
tree = tree.getDecorator('Angel'); // 第6步：将Angel对象赋给tree，这时候父原型的父原型里的getDecorator依然可用
tree = tree.getDecorator('RedBalls'); // 第9步：将RedBalls对象赋给tree

tree.decorate(); // 第10步：执行RedBalls对象的decorate方法