
function ex2(){
    var n = 1000
    var a = []
    var s = ''
    for (var i = 2; i < n; i++) a[i] = 1
    for (var i = 2; i < n; i++){
        if (a[i] == 1){
            for(var j = i * 2; j < n; j += i) a[j] = 0
            s += ' ' + i
        }
    }
    puts(s)
}
ex2()
