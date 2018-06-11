var strs = ["meijo", "university", "abc",
            "shiogama","yagoto", "ueda", "hara",
            "irinaka", "yagoto-nisseki", "kanayama"]

function h(s){
    var n = 0
    for (var i = 0; i < s.length; i++){
        n = (n * 234 + s.charCodeAt(i)) % 103
    }
    return n
}


function make_table(){
    var a = []
    for (var i = 0; i < strs.length; i++){
        var v = h(strs[i])
        a[v] = strs[i]
    }
    return a
}
puts(make_table())
