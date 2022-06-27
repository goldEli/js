let n = 1;

while(true) {
    if (n%5 === 1 && n%6 === 5 && n%7 === 4 && n%11 === 10) {
        console.log(n)
        break;
    }
    ++n
}