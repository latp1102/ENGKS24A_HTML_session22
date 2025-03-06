let number1 = [1,4,7,8,3];
let sumLe = 0;
let sumChan = 0;

for (let i = 0; i < number1.length; i++) {
    if (number1[i] % 2 == 0) { 
        sumChan += number1[i];
    } else {
        sumLe += number1[i];
    }
}
console.log(`tổng các số chẵn ${sumChan}`);
console.log(`tổng các số lẻ ${sumLe}`);



