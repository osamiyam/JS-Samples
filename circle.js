function f(x, y){
    return x * x + y * y - 1
}

function circle(p1, p2, level){
    if (level == 0){
        draw_rect(p1, p2)
        return 
    }
    var x1 = p1[0]; var y1 = p1[1]
    var x2 = p2[0]; var y2 = p2[1]
    var c1 = f(x1, y1)
    var c2 = f(x1, y2)
    var c3 = f(x2, y1)
    var c4 = f(x2, y2)
    if (c1 > 0 && c2 > 0 && c3 > 0 && c4 > 0 ||
        c1 < 0 && c2 < 0 && c3 < 0 && c4 < 0)
        return
    var mx = (x1 + x2) / 2
    var my = (y1 + y2) / 2
    var pm = [mx, my]
    var pp1 = [mx, y1]
    var pp2 = [x2, my]
    var pp3 = [x1, my]
    var pp4 = [mx, y2]
    circle(p1, pm, level - 1)
    circle(pm, p2, level - 1)
    circle(pp1, pp2, level - 1)
    circle(pp3, pp4, level - 1)
}

circle([0, 1], [1, 0], 9)
