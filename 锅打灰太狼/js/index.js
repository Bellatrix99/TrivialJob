window.onload = function() {
    function random (m, n) {
        return Math.floor(Math.random() * ((n - m + 1) + m));
    }
    var score = document.getElementById("score");
    var time = document.getElementById("time");
    var wolfs = document.getElementById("wolf");
    var menu = document.getElementById("menu");
    var start = document.getElementById("start");
    var pause = document.getElementById("pause");
    var gameover = document.getElementById("gameover");


    //狼出现的位置，用数组存储有对应关系的数据
    //随机出现共有9个位置
    var arrPosi = [{
        l: "98px",
        t: "115px"
    }, {
        l: "17px",
        t: "160px"
    }, {
        l: "15px",
        t: "220px"
    }, {
        l: "30px",
        t: "293px"
    }, {
        l: "122px",
        t: "273px"
    }, {
        l: "207px",
        t: "295px"
    }, {
        l: "200px",
        t: "211px"
    }, {
        l: "187px",
        t: "141px"
    }, {
        l: "100px",
        t: "185px"
    }];
    //创建一个狼出现的定时器
    var createWolfTimer;
    //获取倒计时图片宽度
    var timeWidth = time.offsetWidth;
    //设置倒计时状态  是否开始倒计时
    var timeBol = false;//假设未开始为false


    //处理得分还是失分
    function scoreFn (a) {
        var scores =  parseInt(score.innerHTML);
        if (a.type == "x") {
            score.innerHTML = scores - 10;
        } else {
            score.innerHTML = scores + 10;
        }
    }
    //设置倒计时定时器
    var timeTimer = setInterval(function () {
        //如果开始游戏，则执行以下程序（启动定时器）
        if (timeBol) {
            //倒计时图片宽度每次-1px
            timeWidth -= 2;
            if (timeWidth <= 0) {
                gameover.style.display = "block";
                clearInterval(timeTimer);
                clearInterval(createWolfTimer);
            }
            //每执行一次定时器，图片宽度-2，同时重新设置图片宽度
            time.style.width = timeWidth + "px";
        }
    }, 100);

    let timeDown = function() {
        var timeTimer = setInterval(function () {
            //如果开始游戏，则执行以下程序（启动定时器）
            if (timeBol) {
                //倒计时图片宽度每次-1px
                timeWidth --;
                if (timeWidth <= 0) {
                    pause.style.display = "none";
                    gameover.style.display = "block";
                    clearInterval(timeTimer);
                    clearInterval(createWolfTimer);
                }
                //每执行一次定时器，图片宽度-2，同时重新设置图片宽度
                time.style.width = timeWidth + "px";
            }
        }, 100);
    }

    // let now = stopNow;
    // pause.onclick = function() {
    //     if(now=="playNow"){
    //         clearInterval(timeTimer);
    //         clearInterval(createWolfTimer);
    //         now="stopNow";
    //     }
    //     if(now=="stopNow"){
    //         setInterval("timeTimer()",100);//设置计时方法
    //         setInterval("createWolfTimer()",150);//设置计时方法
    //         now="playNow";
    //     }
    // };

    pause.style.display = "none";
    timeTimer;
    var prevIndex = -7;//记录上一次狼位置的下标
    start.onclick = startGame;
    function startGame() {
        //点击开始游戏时。需要将倒计时定时器状态设置为true，以便启动timeTimer;
        menu.style.display = "none";
        timeBol = true;
        pause.onclick = stopFn;
        function stopFn() {
            if (timeBol) {
                pause.style.display = "none";
                menu.style.display = "block";
                clearInterval(timeTimer);
                clearInterval(createWolfTimer);
            }else{
                menu.style.display = "none";
            }
            timeBol = !timeBol;
        }
        timeDown();
        pause.style.display = "block";
        createWolfTimer = setInterval(function () {
            var wolf = document.createElement("img");//狼所在的图片对象
            wolf.type = random(0, 100) > 20 ? "h" : "x";//随机大狼或者是小狼（大狼几率比小狼几率高）
            wolf.index = 0;//设置属性值  表示狼出现图片的时候处于第一张状态
            wolf.src = "img/" + wolf.type + wolf.index + ".png";
            var nowWolfs = wolfs.children;//获取所有狼

            var r = random(0, arrPosi.length - 1);//随机坑
            /**
             * 避免此次随机狼的位置和上次的位置相同
             */
            var resultBol = true;//代表是否继续随机的状态
            while (resultBol) {
                r = random(0, arrPosi.length - 1);
                if (prevIndex == r) {
                    //说明和上次重复
                    resultBol = true;
                } else{
                    //不重复
                    resultBol = false;
                }
            }
            /**
             * 给狼定位   将r下标对应的位置对象里的left和top值赋给狼位置
             */
            wolf.style.left = arrPosi[r].l;
            wolf.style.top = arrPosi[r].t;
            wolfs.appendChild(wolf);//将狼对象wolf插入节点wolfs中
            prevIndex = r;//执行顺序技巧，把这次的狼或者说坑的位置定下来之后再把这次的值赋给prevIndex以便下一次循环的时候做不重复处理
            //创建狼钻出来的定时器
            wolf.upTimer = setInterval(function () {
                wolf.index++;
                if (wolf.index > 4) {
                    //清除狼出现的定时器
                    clearInterval(wolf.upTimer);
                    //启动狼消失的定时器
                    wolf.downFn();
                }
                wolf.src = "img/" + wolf.type + wolf.index + ".png";
            }, 100);
            /**
             * 这个定时器延迟时间可以和downTimer的延迟时间不一样，因为downTimer是封装在函数中作为判断条件用的，当满足判断条件时upTimer已经被清除。
             */
            //狼消失函数
            wolf.downFn = function () {
                //创建狼消失的定时器
                wolf.downTimer = setInterval(function () {
                    wolf.index--;
                    if (wolf.index <= 0) {
                        //清空定时器
                        clearInterval(wolf.downTimer);
                        //移除狼所在的节点
                        wolfs.removeChild(wolf);
                    }
                    wolf.src = "img/" + wolf.type + wolf.index + ".png";
                }, 100);
            }
            //记录点击的状态，假设true为已经未点击狼
            wolf.clickBol = true;
            //为狼添加点击事件
            wolf.onclick = function () {
                console.log(wolf.type);
                //如果状态值为false，表明已点击
                if (wolf.clickBol == false) {
                    return;//当状态量变化的时候直接返回
                }
                wolf.clickBol = false;
                //处理得分还是失分
                scoreFn(wolf);
                //重置属性index，切换到打击图片
                wolf.index = 5;
                //清除出现和消失的定时器
                clearInterval(wolf.upTimer);
                clearInterval(wolf.downTimer);
                //点击狼之后，创建一个打击图片播放的定时器
                wolf.clickTimer = setInterval(function () {
                    wolf.index++;
                    if (wolf.index >= 9) {
                        clearInterval(wolf.clickTimer);
                        wolfs.removeChild(wolf);
                    }
                    wolf.src = "img/" + wolf.type + wolf.index + ".png";
                }, 100);
            }
        }, 1000);
    }
    gameover.onclick = function() {
        // 初始化分数
        score.innerHTML = 0;
        time.style.width = '180px';
        timeWidth = 180;
        pause.style.display = "block";
        timeDown();
        gameover.style.display = "none";
        startGame();
    }

}
