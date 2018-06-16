/*                                                                              
 * A hash function which outputs values
 * less than 20,011                        
 */
function h(pat){
    var s = 0
    for (var i = 0; i < 9; i++){
        s = (s  * 3444 + pat[i]) % 20011
    }
    return s
}

function eq_pat(pat1, pat2){
    for (var i = 0; i < 9; i++){
        if (pat1[i] != pat2[i])
            return false
    }
    return true
}

var pat_table = []

function add_pat(pat, dist){
    var v = h(pat)
    if (pat_table[v] === undefined){
        pat_table[v] = [[pat, dist]]
        return 1
    } else{
        lst = pat_table[v]
        for (var i = 0; i < lst.length; i++)
            if (eq_pat(lst[i][0], pat)) return 0
        pat_table[v].push([pat, dist])
        return 1
    }
}
function find_pat(pat){
    var v = h(pat)
    if (pat_table[v] === undefined) return -1
    else {
        var lst = pat_table[v]
        for (var i = 0; i < lst.length; i++)
            if (eq_pat(lst[i][0], pat)) return lst[i][1]
        return -1
    }
}


function find_zero(pat){
    for (var i = 0; i < 9; i++){
        if (pat[i] == 0) return i
    }
    return -1
}

function work(){
    var init_pat = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    var queue = [[init_pat, 0]]
    var counter = 0
    var lastpat = null
    while (queue.length > 0){
        var [pat, dist] = queue.shift()
        var ddist = find_pat(pat)
        if (ddist < 0){
            add_pat(pat, dist)
            lastpat = pat
            counter += 1
            var p = find_zero(pat)
            var px = p % 3
            var py = Math.floor(p / 3)
            if (px > 0){
                ppat = pat.slice(0)
                ppat[p] = ppat[p - 1]
                ppat[p - 1] = 0
                queue.push([ppat, dist + 1])
            }
            if (px < 2){
                ppat = pat.slice(0)
                ppat[p] = ppat[p + 1]
                ppat[p + 1] = 0
                queue.push([ppat, dist + 1])
            }
            if (py > 0){
                ppat = pat.slice(0)
                ppat[p] = ppat[p - 3]
                ppat[p - 3] = 0
                queue.push([ppat, dist + 1])
            }
            if (py < 2){
                ppat = pat.slice(0)
                ppat[p] = ppat[p + 3]
                ppat[p + 3] = 0
                queue.push([ppat, dist + 1])
            }
        }
    }
    puts(counter)
    puts(lastpat)
}

work()
