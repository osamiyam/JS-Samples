function jacobi(n){
    var a = 1, b = 2, c = 1, d = 4
    var e = 2, f = -3
    function F(p){
        var [x, y] = p
        return [(e - b * y) / a, (f - c * x) / d]
    }
    var p = [0, 0]
    for (var i = 0; i < n; i++){
        p = F(p)
    }
    return p
}
