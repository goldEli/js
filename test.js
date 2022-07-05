function updateRandom() {
    var p = Math.random(), 
        n = Math.random() / 4;
    if( p < 0.01 )
        return 0 + n;
    if( p < 0.04 )
        return 0.25 + n;
    if( p < 0.1 )
        return 0.5 + n;
    if( p < 1 )
        return 0.75 + n;
}

var objects = [ '登山包', '旅行箱', '移动电源', '不中奖' ];
var randomIndex = Math.floor( objects.length * updateRandom() ); 
var object = objects[ randomIndex ];
console.log(object);