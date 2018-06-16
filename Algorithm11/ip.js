function make_ip_address(n){
   var i;
   var a = [];
   function r256(){
      return Math.floor(Math.random() * 256);
   }
   for (i = 0; i < n; i++)
     a[i] = [r256(), r256(), r256(), r256()]
   return a
}

puts(make_ip_address(10))

var RR = 1232343

function hash(ip){
  var i
  var s = 0
  for (i = 0; i < 4; i++)
    s = (s * 3212 + ip[i]) % RR
  return s
}

function test(){
  var N = 10000
  var data = make_ip_address(N);
  var min = 100
  for (i = 0; i < 6000000; i++){
     var d = hash(data[Math.floor(Math.random() * N)]) / RR
     if (min > d) min = d
  }
  puts(min)
  puts(1 / min + 1)
}
