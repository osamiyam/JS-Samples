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

function main(){
    const N = 100
    var pts = init_pts(N)
    var m = []
    var i, k
    for (i = 0; i < N; i++){
        m[i] = i;
    }
    draw_path(m)    
}

main()
