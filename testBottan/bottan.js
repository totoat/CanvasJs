console.log("Javascriptを読み込めている!");

var count=0;

var countup=function(){
    console.log(count++,"秒");

    // 終了条件も繰り返し関数の中に書かないと気づかれないという
    if(count>5){
        console.log("clearIntervalが呼ばれた!");
        clearInterval(id);
    }
}
// setInterval(繰り返したい関数,繰り返す区間(ミリ秒))
var id=setInterval(countup,1000);
