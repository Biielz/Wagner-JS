let num = 1
let num2 = 0
let num3 = 0

for (i=0; i<=20; i++) {
    num3 = num + num2
    num = num2
    num2 = num3
    document.write(num3 + "<br>")
}

document.write('<center><br><img src="images/fibo.png" alt="fibonacci"></center>')