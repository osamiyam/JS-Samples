import sys
import re

def work():
    if len(sys.argv) != 2:
        print "Usage: python henkan.py fname"
        return
    fp = open(sys.argv[1], 'r')
    dat = fp.read()
    fp.close()
    while True:
        res = re.search(r'%u[0-9A-F][0-9A-F][0-9A-F][0-9A-F]', dat)
        if res == None: break
        else :
            start, end = res.start(), res.end()
            sys.stdout.write(dat[:start])
            cc = unichr(int(dat[start:end][2:6], 16))
            sys.stdout.write(cc.encode('utf-8'))
            dat = dat[end:]
    if len(dat) > 0:
        sys.stdout.write(dat)

if __name__ == '__main__':
    work()
