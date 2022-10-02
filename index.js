// Ex01: Arrange Nums
// input: Num1, Num2, Num3

//process: use array and scan each element of array

//output: console.log(Num1 > Num2 > Num3);

function ArrangeNum() {
  var a = 9;
  var b = 8;
  var c = 7;
  var Num = [a, b, c];
  var temp = 0;
  for (var i = 0; i < 2; i++) {
    for (var j = i + 1; j < 3; j++) {
      if (Num[i] > Num[j]) {
        temp = Num[i];
        Num[i] = Num[j];
        Num[j] = temp;
      }
    }
  }
  console.log("Arrange Nums: ", Num[0], Num[1], Num[2]);
}
//Ex02: greetings
//input: members: B, M, A, E

//process: use switch case to find members

//outpout: "Hello" + "members"

function Greetings() {
  var mem = "B";
  switch (mem) {
    case "B":
      console.log("Hello Dad!");
      break;
    case "M":
      console.log("Hello Mom!");
      break;
    case "A":
      console.log("Hello Brother!");
      break;
    case "E":
      console.log("Hello Sister!");
      break;
    default:
      return 0;
  }
}

//Ex02: Count Odd Even
//input: Nums: a, b, c; var Odd, var Even

//process: use array and scan each element of array

//outpout: Odd, Even.

function CountOddEven() {
  var Num1 = 1;
  var Num2 = 2;
  var Num3 = 3;
  var Num = [Num1, Num2, Num3];
  var Odd = 0;
  var Even = 0;
  for (var i = 0; i < 3; i++) {
    if (Num[i] % 2 === 0) Even++;
    else Odd++;
  }
  console.log("Nums Odd = ", Odd, ", ", "Nums Even = ", Even);
}

//Ex02: triangle
//input: a, b, c

//process: check a, b, c can combine to a triangle, then check output

//outpout: isosceles triangle, equilateral triangle, right triangle.

function Triangleabc() {
  var a = 3;
  var b = 4;
  var c = 5;
  if (a + b > c) {
    if (a === b || b === c || c === a) {
      console.log("isosceles triangle");
    }
    if (a === b && b === c && c === a) {
      console.log("equilateral triangle");
    }
    if (
      a * a + b * b === c * c ||
      a * a + c * c === b * b ||
      b * b + c * c === a * a
    ) {
      console.log("right triangle");
    }
  } else {
    console.log("not a triangle");
  }
}
