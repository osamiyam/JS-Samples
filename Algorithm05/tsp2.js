function init_pts(n){
    var i
    pts = []
    for (i = 0; i < n; i++){
        var x = Math.random()
        var y = Math.random()
        pts.push([x, y])
    }
    return pts
}

function draw_path(b){
    var i
    for (i = 0; i < b.length; i++){
        const EPS = 0.004
        var [x, y] = pts[b[i]]
        draw_rect([x - EPS, y - EPS],
                  [x + EPS, y + EPS])
    }
    for (i = 0; i < b.length - 1; i++){
        var pt1 = pts[b[i]]
        var pt2 = pts[b[i + 1]]
        draw_line(pt1, pt2)
    }
    pt1 = pts[b[b.length - 1]]
    pt2 = pts[b[0]]
    draw_line(pt1, pt2)
}

function draw_it(k, dd, m){
    puts(k + ":" + dd)
    cls()
    draw_path(m)
}

function main(){
    const N = 100
    var pts = init_pts(N)
    var m = []
    var i, k
    for (i = 0; i < N; i++){
        m[i] = i;
    }
    for (k = 0; k < 400000; k++){
        var m1 = m.slice(0)
        var i1 = Math.floor(Math.random() * (N - 1)) + 1
        var i2 = Math.floor(Math.random() * (N - 1)) + 1
        if (i1 == i2) continue
        var tmp = m1[i1]
        m1[i1] = m1[i2]
        m1[i2] = tmp
        var dd1 = path_length(m, pts)
        var dd2 = path_length(m1, pts)
        if (dd2 < dd1){
            m = m1
            draw_it(k, dd2, m)
        } else {
            var val = Math.exp(-(dd2 - dd1) / 0.02 )
            if  (val > Math.random()){
                m = m1
                draw_it(k, dd2, m)
            }
        }
    }
}

cls()
main()
