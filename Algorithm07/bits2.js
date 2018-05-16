
function print_bits(n, prefix){
    if (n == 0) puts(prefix)
    else{
        print_bits(n - 1, prefix + '0')
        print_bits(n - 1, prefix + '1')
    }
}

print_bits(10, "")

