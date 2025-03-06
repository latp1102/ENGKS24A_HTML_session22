let str = prompt("Nhập dãy số:");
let dem = 1;

for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i]) || str[i] == ' ') {
        dem = 0;
        break;
    }
}

if (dem) {
    let a = str.split("");
    let maxNumber = a[0];
    for (let i = 0; i < a.length; i++){
        if(a[i] > maxNumber){
            maxNumber = a[i];
        }
    }
    console.log(`${maxNumber} số lớn nhất `);
} else {
    console.log("dãy số không hợp lệ");
}