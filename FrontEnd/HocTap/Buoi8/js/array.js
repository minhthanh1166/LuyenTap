// var array = [
//     "JS",
//     "RUBY",
//     "PHP"
// ];
// //debugger;
// console.log("For")
// for (var index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }
//
// console.log("For in")
// for (const arrayKey in array) {
//     console.log(arrayKey)
// }
//
// console.log("For of")
// for (const string of array) {
//     console.log(string);
// }


// Có 2 cách khỏi tạo mảng
// var array1 = [1, 2, 3, 4, 5, 6];
// var array = new Array(1, 2, 3, 4, 5, 6);
// console.log(array[4]);
// console.log(array1[4]);


// Nôi các phần tử trong mảng
var array = ["JS", "RUBY", "PHP"];

// Nối phần tử thông qua dấu phẩy
array.valueOf();

// Thêm phần tử vào trong mảng
array.push("JAVA");

// Xoá phầ tử cuối cùng trong mảng
array.pop();

// Xoá phần tử đầu tiên của mảng
array.shift();

// Sắp xếp phần tử trong mảng theo kiểu
array.sort();

// Nối hai array với nhau
var array2 = ["C#", "C++"];
// array = array.concat(array2);

var newArr = [...array, ...array2];
// Có 2 cách để nối mảng

// lấy phần tử trong mảng để tạo ra mảng mới ở vị trí start = 1; end = 3;
array.slice(1, 3);


console.log(newArr);
