// 6.6.1
const str = prompt("Введите палиндром:");
let normalStr = str.replaceAll(" ", "").toLowerCase();
let newStr = "";
for (let i = normalStr.length - 1; i >= 0; i--) {
  newStr += normalStr[i];
}

if (normalStr == newStr) {
  console.log(`Слово ${str} является палиндромом`);
} else {
  console.log(`Слово ${str} не является палиндромом`);
}

// 6.6.2 
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
let newArr = new Set(arr);
console.log(newArr);

// 6.6.3
const num = +prompt("Введите число:");
let arr = [];
for (let i = 0; i <= num; i++) {
    arr.push(i);
}
console.log(arr);

// 6.6.4
const boardSize = 3;
let board = [];
while (board.length <= boardSize - 1) {
    let row = [];
    for (let i = 1; i <= boardSize; i++) {
        if (Math.random(1) < 0.5) {
            row.push("X");
        } else {
            row.push("O");
        }
    }
    board.push(row);
    console.log(row);
}

// 6.6.5
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
let arr = [];
for (let key in obj) {
    if (Array.isArray(obj[key]) == true) {
        for (let i = 0; i <= obj[key].length - 1; i++) {
            arr.push(obj[key][i]);
        }
    } else {
        arr.push(obj[key]);
    }
}
console.log(arr);
