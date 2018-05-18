var ans = []
function qsort(lst){
    if (lst.length <= 1){
        if (lst.length == 1) ans.push(lst[0])
    } else{
        var key = lst[0]
        var low = []
        var eq = [key]
        var high = []
        for (var i = 1; i < lst.length; i++){
            var m = lst[i]
            if (key > m) low.push(m)
            else if (key < m) high.push(m)
            else eq.push(m)
        }
        qsort(low)
        ans = ans.concat(eq)
        qsort(high)
    }
}

function test1(){
    qsort([3, 5, 4, 8, 2, 3, 1])
    puts(ans)
}

function test2(){
    ans = []
    var prob = []
    for (var i = 0; i < 10000; i++){
        prob.push(Math.random())
    }
    t1 = new Date()
    qsort(prob)
    t2 = new Date()
    puts(ans[0] + " " + ans[5000] + " " + ans[9999])
    puts((t2 - t1) + " ms")
}

test1()
// test2()
