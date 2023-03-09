// Đếm số chẵn và số lẻ trong mảng.
let demSoChan = 0;
let demSoLe = 0;
let arr = [1,2,3,4,5,6];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        demSoChan ++;
    }
    else{
        demSoLe ++;
    }
}
console.log(demSoChan);
console.log(demSoLe);