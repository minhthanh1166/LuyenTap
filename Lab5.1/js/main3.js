const myCount = () => {
    let count = 0;
    let arr = ["Minh", "Thanh", "Huy", "Hoa", "H"];
    for (let i = 0; i <arr.length; i ++ ) {
        count ++;
    }
    return count;
}

console.log(myCount());