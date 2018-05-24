function filter(lst, limit){
    var lst1 = []
    for (var i = 0; i < lst.length; i++)
        if (lst[i] <= limit) lst1.push(lst[i])
    return lst1
}

function sum(lst){
    var s = 0
    for (var i = 0; i < lst.length; i++)
        s = s + lst[i]
    return s
}

function knapsack(lst, limit){
    var llst = filter(lst, limit)
    if (llst.length == 0) return []
    else if (sum(llst) < limit) return llst
    else {
        var a = llst.shift()
        var m1 = knapsack(llst, limit)
        var m2 = knapsack(llst, limit - a)
        m2.unshift(a)
        if (sum(m1) < sum(m2)) return m2
        else return m1
    }
}

var a = []
for (var i = 0; i < 20; i++)
    a.push(Math.floor(Math.random() * 1000))
puts(a)
ans = knapsack(a, 1000)
puts(ans.join(" + ") + " = " + sum(ans))
