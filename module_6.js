// 6.6.1
let str = prompt("Введите палиндром:");
let str1 = str.replaceAll(" ", "").toLowerCase();
console.log(str1);
let str2 = "";
for (let i = str1.length - 1; i >= 0; i--) {
  str2 += str1[i];
}

if (str1 == str2) {
  console.log(`Слово ${str} является палиндромом`);
} else {
  console.log(`Слово ${str} не является палиндромом`);
}

// 6.6.2 
const arr3 = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
let newArr = new Set(arr3);
console.log(newArr);

// 6.6.3
let num = +prompt("Введите число:");
let arr4 = [];
for (let i = 0; i <= num; i++) {
    arr4.push(i);
}
console.log(arr4);

// 6.6.4
let boardSize = 3;
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
let arr5 = [];
for (let key in obj) {
    if (Array.isArray(obj[key]) == true) {
        for (let i = 0; i <= obj[key].length - 1; i++) {
            arr5.push(obj[key][i]);
        }
    } else {
        arr5.push(obj[key]);
    }
}
console.log(arr5);