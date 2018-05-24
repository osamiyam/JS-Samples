function perm(elements){
    var n = elements.length
    var used = []
    var a = []
    var ans = []
    for (var i = 0; i < n; i++)
        used[i] = false
    function det(k){
        if (k >= n)
            ans.push(a.slice(0))
        else {
            for (var i = 0; i < n; i++){
                if (!used[i]){
                    used[i] = true
                    a[k] = elements[i]
                    det(k + 1)
                    used[i] = false
                }
            }
        }
    }
    det(0)
    return ans
}

puts(perm([1, 2, 3, 4, 5]))
