// 建造者模式可以将一个复杂对象的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。
// 我们用了建造者模式，那么用户就需要指定需要建造的类型就可以得到它们，而具体建造的过程和细节就不需要知道了。
function getBeerById(id,callback){
    asyncRequest('get','beer.uri?id='+id,function(resp){
        callback(resp.responseText);
    });
}

var el = document.querySelector('#test');
el.addEventListener('click',getBeerByIdBridge,false);

function getBeerByIdBridge(e){
    getBeerById(this.Id,function(beer){
        console.log('Request Beer:'+ beer);
    })
}

// 根据建造者的定义，表相即是回调，也就是说获取数据以后如何显示和处理取决于回调函数，相应地回调函数在处理数据的时候不需要关注是如何获取数据的，同样的例子也可以在jquery的ajax方法里看到，有很多回调函数（比如success, error回调等），主要目的就是职责分离