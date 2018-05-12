function jacobi(n){
    var A = [[6, 6, -7], [4, 7, 3], [3, -9, 10]]
    var b = [-3, 4, 9]
    var p = [0, 0, 0]
    var eps = 1.0e-12
    function res(){
        var ss = 0.0
        for (var i = 0; i < 3; i++){
            var s = b[i]
            for (var j = 0; j < 3; j++)
                s -= A[i][j] * p[j]
            ss += s * s
        }
        return ss
    }
    for (var k = 0; k < n; k++){
        if (res() < eps){
            puts("k = " + k)
            return p
        }
        var q = []
        for (var i = 0; i < 3; i++){
            var s = b[i]
            for (var j = 0; j < 3; j++)
                if (i != j) s -= A[i][j]*p[j]
            q[i] = s / A[i][i]
        }
        p = q
    }
    return null
}
