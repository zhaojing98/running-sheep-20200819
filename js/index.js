/**
 * 知识点： 
 * 工厂模式  面向对象思想  dom拖拽  单对象编程的方式   js的动画
 * 
 * 
 * 1, 解决小羊奔跑的动画   （1）自身的动画    （2）移动的动画   √
 * 
 * 2，多只羊出现舞台上  如何实现？每只羊的速度不一样  ？思考     √
 * 
 * 3，拖拽的时候   动画的交互                                 √                            
 * 
 * 
 * 
 * demo的制作就完成了 
 * 
 * 
 */


var sheeps = {
    sPars: {
        stage: document.getElementsByClassName('stage')[0],//舞台
        frequency: 70,//动画的频率
        backNum: 0,//背景位置变量
        speed: 10,//移动速度变量
        maxSheepNum: 8
    },
    init: function () {//入口函数
        // console.log('dengge')
        this.createSheep();
    },
    createSheep: function () {
        //羊的工厂

        function SheepClass(data) {//构造函数
            this.sheep = document.createElement('div');
            data.stage.appendChild(this.sheep);
            this.sheep.className = 'sheep';
            this.frequency = Math.floor(Math.random() * (data.frequency)) + 30;
            this.backNum = data.backNum;
            this.speed = data.speed;
            this.stage = data.stage;

            this.currentSpeed = data.speed;

            this.top = 0;
        }

        var _this = this;
        var timer = setInterval(function () {
            var sheepNum = _this.sPars.stage.children.length;//舞台上羊的数量
            if (sheepNum < _this.sPars.maxSheepNum) {
                var sheep = new SheepClass(_this.sPars);//得到他的实例
                _this.sheepRun(sheep);
            }

        }, 1000)
        // var sheep = new SheepClass(this.sPars);//得到他的实例

        // this.sheepRun(sheep);

    },
    sheepRun: function (sheepPlus) {
        sheepPlus.sheepAnimate = setInterval(function () {
            sheepPlus.backNum = sheepPlus.backNum + 164;
            if (sheepPlus.backNum == 1312) {
                sheepPlus.backNum = 0;
            }
            var cot = sheepPlus.sheep.offsetLeft - sheepPlus.speed;
            if (cot <= -165) {
                clearInterval(sheepPlus.sheepAnimate);
                sheepPlus.stage.removeChild(sheepPlus.sheep);
                console.log('remove');
            }
            sheepPlus.sheep.style.left = cot + 'px';//移动的效果
            sheepPlus.sheep.style.backgroundPosition = -sheepPlus.backNum + 'px ' + sheepPlus.top + 'px';
        }, sheepPlus.frequency);

        //拖拽部分

        sheepPlus.sheep.onmousedown  = function(e){
            sheepPlus.speed = 0;//速度停止
            sheepPlus.top = -128;



            sheepPlus.x = e.pageX;
            sheepPlus.y = e.pageY;

            document.onmousemove =  function(e){
                var chax =  e.pageX - sheepPlus.x;
                var chay = e.pageY - sheepPlus.y;
                sheepPlus.sheep.style.left = chax + sheepPlus.sheep.offsetLeft + 'px';
                sheepPlus.sheep.style.top = chay + sheepPlus.sheep.offsetTop + 'px';
                sheepPlus.x = e.pageX;
                sheepPlus.y = e.pageY;

            }

            document.onmouseup = function(){
                sheepPlus.speed = sheepPlus.currentSpeed;//还原速度
                sheepPlus.top = 0;
                document.onmousemove = null;
            }



        }


    }

};
sheeps.init();//入口函数

//  es5  核心的编程思想 
//  html  css js jquery  ajax  8 ----  1.45k
//  网络部分 （http协议 tcp ajax ） HTML5 + CSS3  + E6 7 8 9 ，
//   mvc    移动端适配
//前端工程化部分的前置知识  webpack 模块化开发 nodejs  npm  git ，vue react
// vue-x  mvvm  设计模式  ， 前端的数据结构与算法  

//前端一定需要会 
// 懂一门后端语言  nodejs

//两个阶段
// 1，就业班
// 2，进阶版

// 报名全阶班的同学     签约就业保障协议 10w  ；
                   //  该阶段与时俱进的课程更新
                   //  大厂内推的名额
                   //  IT人脉圈
                   //  折扣  曾送一套书 

                   //  原价 12999    -----  折扣   大家 问一下 自己的顾问 

                   //  线上 ：直播  + 录播相结合的学习方式  
                   //  线上答疑天团   

                      
























 //1 动画问题   

//  (1)自身动画 

//var sheep =  document.getElementsByClassName('sheep')[0];
//var backNum = 0;//背景位置变量
// var sheepAnimate = setInterval(function(){
//     backNum = backNum + 164 ;
//     if(backNum == 1312){
//         backNum = 0;
//     }
//     sheep.style.backgroundPosition = -backNum + 'px ' + 0 + 'px';

// },50)

// (2)移动的动画

    //  sheep.offsetLeft   左偏移量  实时获取
    // var speed  = 10;
    // var sheepRun =  setInterval(function(){

    //     backNum = backNum + 164 ;
    //     if(backNum == 1312){
    //         backNum = 0;
    //     }
    //     var cot = sheep.offsetLeft - speed;
    //     if(cot<= -165 ){
    //         clearInterval(sheepRun);
    //         console.log('remove');
    //     }
    //     sheep.style.left = cot + 'px';//移动的效果
    //     sheep.style.backgroundPosition = -backNum + 'px ' + 0 + 'px';
    // },50)



