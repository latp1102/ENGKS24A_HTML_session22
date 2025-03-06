let number = prompt("Nhập vào chuỗi số");
 let dem = 1;

for (let i = 0; i < number.length; i++) {
    if (isNaN(number[i]) || number[i] === ' ') {
        dem = 0;
        break;
    }
}

if (dem && number.length > 0) {
    let a = number.split("").reverse().join("");
    console.log(a);
} else {
    console.log("dãy số không hợp lệ");
}
