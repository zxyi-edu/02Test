// 封装动画函数
// 传递参数 知道是谁在移动 obj， 移动的距离 target 
function animate(obj, target, callback) { // callback 形参接收回调函数
    // 先结束之前的动画 在开始 现在的动画
    clearInterval(obj.timer);
    var num = obj.offsetLeft; // 动画初始位置
    // 通过传入的 对象记录 当前动画 （记录到当前到对象的timer属性中）
    obj.timer = setInterval(function () {
        // num 每次增加的值 依次递减， （第一次的值比较大， 最后一次的值最小）
        num += (target - num) / 10;
        num = num > target ? Math.floor(num) : num = Math.ceil(num);

        obj.style.left = num + 'px';
        if (num == target) {
            clearInterval(obj.timer); // 动画执行完成
            if(callback) { // 判断是否传入回调函数
                callback(); // 执行回调函数
            }
        }
    }, 12);
}