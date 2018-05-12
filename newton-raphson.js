function f1(x, y){ return x * x + y * y - 1}
function f2(x, y){ return x * y - 1.0/3}

function work(n, x0, y0){
    var x = x0
    var y = y0
    for (var i = 0; i < n; i++){
        puts(x + " " + y)
        var det = 2 * (x * x - y * y)
        var a = x / det
        var b = -2 * y / det
        var c = -y / det
        var d = 2 * x / det
        var xx = x - a * f1(x, y) - b * f2(x, y)
        var yy = y - c * f1(x, y) - d * f2(x, y)
        x = xx
        y = yy
    }
}
work(12, 0.1, 0.2)
