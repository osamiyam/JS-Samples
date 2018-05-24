
function perm(head, rest){
    if (rest.length == 0) return [head]
    else {
        var res = []
        for (var i = 0; i < rest.length; i++){
            var restx = rest.slice(0)
            var headx = head.concat(restx.splice(i, 1))
            res = res.concat(perm(headx, restx))
        }
        return res
    }
}

m = perm([], [1, 2, 3, 4])
puts(m.length)
for (var i = 0; i < m.length; i++)
    puts(m[i].join("-"))
