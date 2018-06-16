
function range(n){
    var s = []
    var i
    for (i = 0; i < n; i++)
	s.push(i)
    return s
}

function duplicate(item){
    var s = []
    for (i = 0; i < 4; i++)
	s.push(item[i].slice(0))
    s.push(item[4])
    return s
}

function print_item(item){
    var i;
    var s = "[";
    for (i = 0; i < 4; i++){
	s += "[" + item[i]  + "],"
    }
    s += item[4] + "]"
    puts(s)
}

function is_movable(item, i, j){
    if (item[i].length == 0) return false
    else if (item[j].length == 0) return true
    else return (item[i][0] < item[j][0])
}


function hash(item){
    var ss = 0
    var i, j
    for (i = 0; i < 4; i++){
	for (j = 0; j < item[i].length; j++)
	    ss = (ss * 3534 + item[i][j]) % 10000
	ss = (ss + 54323) % 10000
    }
    return ss
}

function eq_item(item1, item2){
    function eq_list(lst1, lst2){
	var i;
	if (lst1.length != lst2.length) return false
	else{
	    for (i = 0; i < lst1.length; i++)
		if (lst1[i] != lst2[i]) return false
	    return true
	}
    }
    var i;
    for (i = 0; i< 4; i++)
	if (! eq_list(item1[i], item2[i])) return false
    return true
}
function find_and_insert(table, item){
    var v = hash(item)
    var i
    var lst
    if (table[v] == undefined){
	table[v] = [item]
	return true
    } else {
	lst = table[v]
	for (i = 0; i < lst.length; i++){
	    if (eq_item(lst[i], item)){
		if (lst[i][4] > item[4]){
		    lst[i][4] = item[4]
		    return true
		} else 
		    return false
	    }
	}
	lst.push(item)
	return true
    }
}
function find_item(table, item){
    var v = hash(item)
    var lst
    var i;
    if (table[v] == undefined) return false
    else {
	lst = table[v]
	for (i = 0; i < lst.length; i++){
	    if (eq_item(lst[i], item)){
		return lst[i]
	    }
	}
	return false
    }
}

function make_hash_table(n){
    var i, j;
    var goal = [[], [], [], range(n), 0]
    var queue = [goal]
    var table = []
    while (queue.length > 0){
	item = queue.shift()
	if (find_and_insert(table, item)){
	    for (i = 0; i < 4; i++){
		for (j = 0; j < 4; j++){
		    if (i == j) continue;
		    if (is_movable(item, i, j)){
			item1 = duplicate(item);
			item1[j].unshift(item1[i].shift())
			item1[4] += 1
			queue.push(item1)
		    }
		}
	    }
	}
    } /* while */
    return table
}

function solve(n){
    var table = make_hash_table(n)
    var init = [range(n), [], [], [], 0]
    var goal = [[], [], [], range(n), 0]
    var i, j, t; 
    var item1, item = find_item(table, init)
    puts("4-peg hanoi puzzle of " + n + " disks")
    while (! eq_item(item, goal)){
	t = true
	print_item(item)
	for (i = 0; i < 4; i++){
	    for (j = 0; j < 4; j++){
		if (i == j) continue;
		if (is_movable(item, i, j)){
		    item1 = duplicate(item);
		    item1[j].unshift(item1[i].shift())
		    item1 = find_item(table, item1)
		    if (item1[4] === item[4] - 1){
			item = item1
			puts(i + "-->" + j)
			t = false
			break;
		    }
		}
	    }
	    if (! t) break;
	}
	if (t) puts("something is wrong.")
    }
    print_item(item)
}

solve(8)
