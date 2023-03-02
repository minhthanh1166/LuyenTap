var myString = "Hello world";


// charAt trả về 1 kí tự trong chuỗi.
console.log(myString.charAt(0));

// Trả về mã unicoe của kí tự trong chuỗi
console.log(myString.charCodeAt(0));

// Nối nhiều chuỗi thành 1
console.log(myString.concat(" ", "I'm", " ", "here"));

// formCharCode trả về kí tự từ mã unicode
console.log(String.fromCharCode(72));

// Chia nhỏ chuỗi thành mảng
console.log(myString.split(" "));

// Thay đổi chữ hoa thành chữ thường
console.log(myString.toLowerCase());
console.log(myString.toUpperCase());

// Tìm kiếm chuỗi con trong chuỗi cha
console.log(myString.indexOf("world"));