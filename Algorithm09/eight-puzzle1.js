
var print
if (print == undefined)
    puts = console.log
else
    puts = print


var UP = 0
var DOWN = 1
var RIGHT = 2
var LEFT = 3
var dir = "udrl"

function find_zero(state){
    for (var i =0; i < 9; i++){
	if (state[i] == 0) return i
    }
    return null
}

function move(state, i){
    var z = find_zero(state)
    var ix = z % 3
    var iy = Math.floor(z / 3)
    if (i == DOWN && iy > 0){
	state[z] = state[z - 3]
	state[z - 3] = 0
    } else if (i == UP && iy < 2){
	state[z] = state[z + 3]
	state[z + 3] = 0
    } else if (i == RIGHT && ix > 0){
	state[z] = state[z - 1]
	state[z - 1] = 0
    } else if (i == LEFT && ix < 2){
	state[z] = state[z + 1]
	state[z + 1] = 0
    }
    return state
}


function next_move_list(state, last_move){
    var moves = []
    var z = find_zero(state)
    var ix = z % 3
    var iy = Math.floor(z / 3)
    if (ix > 0 && last_move != LEFT)
	moves.push(RIGHT)
    if (ix < 2 && last_move != RIGHT)
	moves.push(LEFT)
    if (iy > 0 && last_move != UP)
	moves.push(DOWN)
    if (iy < 2 && last_move != DOWN)
	moves.push(UP)
    return moves
}

function make_random_state(N, state){
    var last_move = null
    var res = ""
    for (var n = 0; n < N; n++){
	var moves =  next_move_list(state, last_move)
	var m = Math.floor(Math.random() * moves.length)
	res = res + dir[moves[m]]
	state = move(state, moves[m])
	last_move = moves[m]
    }
    return res
}

function make_node(dir, pat, parent){
    return [dir, pat, parent]
}

function eq_pat(pat1, pat2){
    for (var i = 0; i < 9; i++){
	if (pat1[i] != pat2[i]) return 1
    }
    return 0
}

function encode(pat){
    var s = 0
    for (var i = 0; i < 9; i++)
	s = s * 9 + pat[i]
    return s
}

function in_list(a, lst){
    for(var i = 0; i < lst.length; i++){
	if (a == lst[i]) return true
    }
    return false
}

function work(){
    state = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    start_board8()
    var res = make_random_state(200, state)
    var transform = function (c){
	if (c == 'u') c = 'd'
	else if (c == 'd') c = 'u'
	else if (c == 'r') c = 'l'
	else if (c = 'l') c = 'r'
	return c
    }
    set_board_state(state)
    resx = ""
    for (var i = 0; i < res.length; i++)
	resx = transform(res[i]) + resx
    puts(state)
    puts(res)
    puts(resx)
    play_moves(resx)
}


function work2(){
   var state1 = [0, 1, 2, 3, 4, 5, 6, 7, 8]
   var state = make_random_state(40, state1)
   puts(state)
   start_board8()
   var mm = []
   var queue = [make_node(null, state, null)]
   while (queue.length > 0){
      var node = queue.shift()
      if (eq_pat(node[1], state1) == 0) break
      var mlist = next_move_list(node[1], node[0])
      for (var i = 0; i < mlist.length; i++){
          var st = move(node[1], mlist[i])
          if (in_list(encode(st), mm)) continue
          var node1 = make_node(mlist[i], st, node)
          mm.push(encode(st))
          queue.push(node1)
      }
   }
   action = ""
   while (true){
      if (node[0] == null) break
      action = dir[node[0]] + action
      node = node[2]
   }
   puts(action)
}    

work()
