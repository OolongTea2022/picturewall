// 获取所有的列表元素
var olistArr = document.querySelectorAll(".list");
// 定义初始的 moveLeft 值
var moveLeftValues = [-200, -400, -600]; // 根据需要调整这些值

// 遍历每个列表
olistArr.forEach(function (olist, index) {
    // 获取 li 数组
    var liArr = olist.querySelectorAll("li");
    // 新建一个变量接收新节点
    var newLiNode = null;
    // 遍历 li 数组，依次复制 li，并挂载到父节点上
    for (var i = 0; i < liArr.length; i++) {
        // 复制节点
        newLiNode = liArr[i].cloneNode(true);
        // 设置初始 left 位置
        newLiNode.style.left = moveLeftValues[index] + "px";
        // 挂载在父节点上
        olist.appendChild(newLiNode);
    }

    // 定义一个全局变量的定时器
    var timer = null;
    // 定义一个全局变量的left值
    var moveLeft = Math.pow(-1,index+1)* -1600-1800; // 例如，第一个div的初始left为-200，第二个div的初始left为-3400，第三个div的初始left为-200
    var tap=[0,1,0];
    // 声明滚动函数move，不传参，内部变量使用全局变量moveLeft
    function move() {
        timer = setInterval(function () {
            // 当跑完一轮时，重置位置
            // 改变方向：根据索引设置不同方向
            if (index === 0) {
                if (moveLeft <= -3440) {
                    tap[0]=1
                }
                if(moveLeft>-200)
                {
                    tap[0]=0;
                }
                if(tap[0]===0)
                {
                moveLeft -= 3; // 向左滚动
                }
                else
                {
                    moveLeft+=3;//向右滚动
                }
            } else if (index === 1) {
                if (moveLeft <= -3440) {
                    tap[1]=1
                }
                if(moveLeft>-200)
                {
                    tap[1]=0;
                }
                if(tap[1]===0)
                {
                moveLeft -= 3; // 向左滚动
                }
                else
                {
                    moveLeft+=3;//向右滚动
                }
            } else {
                if (moveLeft <= -3440) {
                    tap[2]=1
                }
                if(moveLeft>-200)
                {
                    tap[2]=0;
                }
                if(tap[2]===0)
                {
                moveLeft -= 2; // 向左滚动
                }
                else
                {
                    moveLeft+=2;//向右滚动
                }
            }
            // 设置列表每30毫秒左移
            olist.style.left = moveLeft + "px";
        }, 30); // 改变速度：调整定时器间隔时间
    }

    // 加载页面时调用该滚动函数
    move();

    // 鼠标移入清除定时器
    olist.onmouseenter = function () {
        clearInterval(timer);
    };
    // 鼠标移出，调用move重新开启定时器
    olist.onmouseleave = function () {
        move();
    };
});
