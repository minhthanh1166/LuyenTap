// Giải phương trình bậc 1 (console)
// Giải phương trình bậc 1 (html)

// log

// 1; a = 0; b = 0;
// 2: a = 0; b = 123;
// 3: a = 12; b = (tuỳ ý);
// 2x + 3 = 0

const gpt = (a, b) => {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log("Giải phương trình bậc: ", a + "x + " + b + " = 0");
  if (a == 0) {
    if (b == 0) {
      console.log("Phương trình vô số nghiệm");
    } else {
      console.log("Phương trình vô nghiệm");
    }
  } else {
    console.log("Phương trình có nghiệm x = ", -b / a);
  }
};

// Test
gpt(0, 0);
gpt(0, 10);
gpt(10, 20);
