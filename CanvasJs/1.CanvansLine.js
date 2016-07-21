//填充一个矩形
var x = 40, y = 40;
context.fillStyle = "blue"; //设置填充色
context.fillRect(x + 5, y + 5, 40, 90);

//绘制一个矩形边框
context.strokeStyle = "red"; //设置画笔色
context.strokeRect(x, y, 50, 100);


context.beginPath(); //beginPath1
context.moveTo(10, 10);
context.lineTo(50, 10);
context.moveTo(15, 20);
context.lineTo(45, 20);
context.moveTo(10, 30);
context.lineTo(50, 30);
context.moveTo(30, 10);
context.lineTo(30, 30);
context.strokeStyle = "green";
context.stroke();