function hanoi(n, x, y, z){
    if (n == 0) return
    else {
	hanoi(n - 1, x, z, y);
	puts("�ǥ����� " + n + " �� " + x + " ���� " +
	     z + " �ذ�ư" )
	hanoi(n - 1, y, x, z);
    }
}

hanoi(6, 'X', 'Y', 'Z')
