var cancans = document.getElementById("myCanvas");
//得到2D渲染上下文
var context = document.getElementById("myCanvas").getContext("2d");

var img = new Image();
img.width = "500";
img.height = "400";
img.src = "images/canvas.png";
$(img).load(function () {

    //context.drawImage(img, 0, 0); //默认图片大小
    //context.drawImage(img, 10, 10, 100, 100)//指定大小
    context.shadowBlur = 20;
    context.shadowColor = "blue";
    //图片裁剪 
    //参数 源图，源图原点x,y坐标，源图在原点开始的宽长,画布开始画的点x,y,宽长
    //drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);

    //万花筒效果
    //右下
    context.translate(200, 200);
    context.drawImage(img, 0, 0, 500, 500, 0, 0, 200, 200);

    //左下
    //先缩放，画布坐标已经改变，(-200,200)为原(200,200)位置
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.scale(-1, 1);
    context.translate(-200, 200);
    context.drawImage(img, 0, 0, 500, 500, 0, 0, 200, 200);

    //左上
    //先定位，不需要重新转换位置
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.translate(200, 200);
    context.scale(-1, -1);
    context.drawImage(img, 0, 0, 500, 500, 0, 0, 200, 200);

    //右上
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.translate(200, 200);
    context.scale(1, -1);
    context.drawImage(img, 0, 0, 500, 500, 0, 0, 200, 200);

});