let num = 1

for (i=0; i<=100; i++) {
    if (num % 2 == 0) {
        num = num * i
        document.write("Número " + num + " par<br>")
    }
    else {
        document.write("ímpar")
    }
}