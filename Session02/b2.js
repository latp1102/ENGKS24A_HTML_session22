let str = [2,5,7,4,1,8,6];
let number = +prompt("nhập vào số");
let dem = -1;

for(let i = 0; i < str.length; i++){
    if(str[i] == number){
        dem = 1;
        console.log("bingo");
    }
}
if(dem == -1){
    console.log("chúc bạn may mắn lần sau");
}