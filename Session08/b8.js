let numbers = [2,5,7,4,1,8,6,2,5,7];
let a = [];
let count = [];

for (let i = 0; i < numbers.length; i++){
    let index = a.indexOf(numbers[i]);
    if (index === -1){
        a.push(numbers[i]);
        count.push(1);
    } else {
        count[index]++;
    }

}
console.log(a);
console.log(count);

let minValue = Number.MAX_VALUE;
let maxCount = 0;

for (let i = 0; i < a.length;i++){
    if(maxCount < count[i]) {
        maxCount = count[i];
        minValue = a[i];
    } else if (maxCount == count[i] && minValue > a[i]) {
        minValue = a[i];
    }
}
console.log(minValue);
