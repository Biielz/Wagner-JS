let num = 0

for (i=0; i<=100; i++) {
    if (num % 2 == 0) {
        num = num * i
        alert("Número" + num + "par<br>")
    }
    else {
        alert("ímpar")
    }
}