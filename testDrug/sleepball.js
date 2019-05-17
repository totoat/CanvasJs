var speedX = 6.0;
var speedY = 8.0;
var locX = 200;
var locY = 150;
var ctx;

function init(){
    var canvas = document.getElementById('tutorial');
  if (canvas.getContext){
    ctx = canvas.getContext('2d');
    // setInterval関数は一定時間ごとに特定の処理を繰り返す
    // 33ミリ秒ごとにdraw関数を呼び出す
    setInterval(draw, 33);
  }
}

function draw(){
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "rgba(8,8,12,.2)";
  ctx.fillRect(0, 0, 800, 600);
  ctx.globalCompositeOperation = "lighter";

  //位置を更新
  locX += speedX;
  locY += speedY;

  if(locX < 0 || locX > 800){
      speedX *= -1;
  }

  if(locY < 0 || locY > 600){
      speedY *= -1;
  }

  //更新した座標で円を描く
  ctx.beginPath();
        ctx.fillStyle = '#3399FF';
        ctx.arc(locX, locY, 4, 0, Math.PI*2.0, true);
        ctx.fill();
}