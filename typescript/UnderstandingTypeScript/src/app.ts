// number型----------->
function add(n1: number, n2: number) {
  return n1 + n2;
}

// 型推論でnumber型として認識される
const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

// boolean型----------->
function add2(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const printResult = true;
const resultPhrase = "Result is: ";
const result2 = add2(number1, number2, printResult, resultPhrase);

// object型----------->
// 以下のように指定もできるが、型推論を使うのが一般的
// -----------------
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'yota',
//     age: 30,
// }
// -----------------

const person = {
  name: "yota",
  age: 30,
};
console.log(person.name);

// Array型----------->
const person2 = {
  name: "yota",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of person2.hobbies) {
  console.log(hobby.toUpperCase());
}

// Tuple型_要素数と型が固定された配列----------->
const person3: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple
} = {
  name: "yota",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// pushでは型エラーを検知できない
// person3.role.push('admin');

// 以下のことはエラーとして検知できる
// person3.role[1] = 10;

// 異なる長さもエラーとして検知できる
// person3.role = [0, 'admin', 'user'];

// Enum型----------->
// ADMIN=0, READ_ONLY=1, AUTHOR=2
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person4 = {
  name: "yota",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if (person4.role === Role.ADMIN) {
  console.log("管理者ユーザー");
}

// Any型----------->
let favoriteActivities2: any[];
favoriteActivities2 = ["test", 1];

// Union型----------->
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames2 = combine("Max", "Anna");
console.log(combinedNames2);

// Literal型_値そのものを型として定義する----------->
function combine2(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" // Literal型とUnion型の組み合わせ
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges3 = combine2(30, 26, "as-number");
console.log(combinedAges3);

const combinedAges4 = combine2("30", "26", "as-number");
console.log(combinedAges4);

const combinedNames5 = combine2("Max", "Anna", "as-text");
console.log(combinedNames5);

// エイリアス型/カスタム型----------->
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine3(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {}

// 型エイリアスを使っていないコード
function greet(user: { name: string; age: number }) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

// 型エイリアスを使ったコード
type User = { name: string; age: number };

function greet2(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder2(user: User, checkAge: number) {
  return checkAge > user.age;
}

// 返り値の型を指定する----------->
// 以下の場合は型推論されるので書かなくても良いが指定は以下のようにする
function printResult2(num: number): void {
  console.log("Result: " + num);
}

printResult2(10);

// function型----------->
let combineValues: (a: number, b: number) => number;

combineValues = add;
// Function型を指定していないとコンパイルはできるが実行時にエラーになる
// combineValues = 5;
// combineValues = printResult2;

console.log(combineValues(8, 8));
printResult2(add(5, 12));

// コールバック関数----------->
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

// unknnown型----------->
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// anyは代入できるが、unknownは代入できない
// anyよりもunknownを使うことが推奨される
// userName = userInput;
if (typeof userInput === "string") {
  userName = userInput;
}

// never型----------->
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

// throwされてしまうので、console.logには決して入らない
// もし、console.logの内容が表示されるとしたらundefinedかなにかだが、実行してみても何も表示されない
const resultError = generateError("An error occurred!", 500);
console.log(resultError);

// モダンな関数の書き方----------->
const addModern = (n1: number, n2: number = 1) => n1 + n2;

const printOutput: (a: number | string) => void = (output = 'hello') => {
  console.log(output);
};

printOutput(addModern(5, 2));
printOutput(addModern(5));

const button = document.querySelector('button');
if(button){
  button.addEventListener('click', event =>{
  console.log(event);
})
}

// スプレッド演算子----------->
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
