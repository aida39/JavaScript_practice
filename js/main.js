//例外処理
// try {
//   console.log("try節:この行は実行されます");
//   undefinedFunction();
//   console.log("try節:この行はスキップされます");
// } catch (error) {
//   console.log("catch節:この行は実行されます");
//   console.log(error.message);
// } finally {
//   console.log("finally節:この行は実行されます");
// }

// デバッグ
document.getElementById("section-2").style.color = "red";

var baseElement = document.getElementById("section-2");
var section2node2 = baseElement.childNodes[5];
section2node2.innerHTML = "子2は変更されました";

console.log(baseElement.childNodes);

// DOM操作
// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   const className = prompt("クラス名を入力してください");
//   document.getElementsByClassName(className)[0].style.color = "red";
// });

// 日付と時刻
// function timer() {
//   const time = dayjs().format("HH:mm:ss");
//   console.log(time);
// }
// setInterval(timer, 1000);

// オブジェクト
// const student = {
//   name: "太郎",
//   age: 20,
//   gender: "男性",
//   skills: ["html", "css", "js"],
//   wife: null,
// };

// const json = JSON.stringify(student);

// console.log(student);
// console.log(json);

// const school = {
//   name: "トム",
//   month: 3,
//   skills: ["html", "css", "js", "Vue.js", "php", "Laravel"],

//   createSentense() {
//     let data;
//     this.skills.forEach((skill, index) => {
//       if (index === 0) {
//         data = skill;
//       } else {
//         data = `${data}と${skill}` ;
//       }
//     });
//     return `${this.name}は${this.month}月から${data}を学びます`;
//   },
// };

// console.log(school.createSentense());

// スケジューリング

// let number = 1;

// function timer() {
//   console.log(number);
//   number++;
// }
// setInterval(timer, 1000);

// ダイアログ
// const number = prompt("数字を入力してください");

// const check = confirm("入力した数字は" + number + "ですね？");

// function number_sort(number) {
//   if(number % 2 === 0) alert("偶数です");
//   else if (number % 2 === 1) alert("奇数です");
//   else alert("入力された値が不正です");
// }

// if (check) {
//   number_sort(number);
// } else {
//   alert("リロードしてやり直してください");
// }
