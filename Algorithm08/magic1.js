

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

a = []
for (i = 1; i < 10; i++) a[i - 1] = i
m = perm([], a)
puts(m.length)
for (var i = 0; i < m.length; i++){
    mm = m[i]
    if (mm[0] + mm[1] + mm[2] != 15) continue
    if (mm[3] + mm[4] + mm[5] != 15) continue
    if (mm[0] + mm[3] + mm[6] != 15) continue
    if (mm[1] + mm[4] + mm[7] != 15) continue
    if (mm[2] + mm[4] + mm[6] != 15) continue
    if (mm[0] + mm[4] + mm[8] != 15) continue
    puts(mm.join("-"))
}
