/*
interfaceはオブジェクトがどんな形であるかを定義するもの
    →実質型のようなもの
具体的な値や初期値を設定することはできない
*/
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

/* 
typeでも同じようなことができる
interfaceと違い、union型など様々な型を定義できる
*/
type Person = {
  name: string;
  age: number;

  greet(phrase: string): void;
};

let user1: Person;

user1 = {
  name: "Max",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + "" + this.name);
  },
};

user1.greet("Helllo I am ");
