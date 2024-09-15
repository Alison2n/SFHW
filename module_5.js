// 5.10.1
let randomNum = +prompt("Введите любое число:");
alert(`Введеное число - ${randomNum}
Квадрат числа - ${randomNum ** 2}
Куб числа - ${randomNum ** 3}`);
// 5.10.2
let promocode = prompt("Введите промокод:").toLowerCase();
if (promocode == "скидка") {
    alert("Промокод применен");
} else {
    alert("промокод не работает");
}
// 5.10.3
let name = prompt("Введите ваше имя:");
let yearOfBirth = +prompt("Введите ваш год рождения:");
if (isNaN(yearOfBirth) == false) {
    alert(`${name}: ${2024 - yearOfBirth}`);
} else {
    alert("Год должен быть числом!");
}
// 5.10.4
let name2 = prompt("Введите ваше имя:");
let yearOfBirth2 = +prompt("Введите ваш год рождения:");
let remains = (2024 - yearOfBirth2) % 10;
if (
  name2.length > 0 && isNaN(yearOfBirth2) == false) {
    switch (remains) {
        case 1:
        alert(`${name2}: ${2024 - yearOfBirth2} год`);
        break;
        case 2 || 3 || 4:
        alert(`${name2}: ${2024 - yearOfBirth2} года`);
        break;
        default:
        alert(`${name2}: ${2024 - yearOfBirth2} лет`);
        break;
    }
} else {
    alert("Год не число или пустое имя");
}
// 5.10.5
let age = +prompt("Введите ваш возраст:");
let credit;
console.log(age);
if (age < 18) {
    alert("Извините, кредит не одобрен");
}
else if (age >= 18 && age <= 21) {
    credit = +prompt(`Мы можем вам выдать максимум 50000.
Введите сумму кратную 1000.`);
    if (credit % 1000 == 0 && isNaN(credit) == false && credit <= 50000) {
        alert(`Кредит размером ${credit} одобрен!`);
    }
    else if (credit % 1000 != 0 && isNaN(credit) == false && credit <= 50000) {
        alert(`Вы ввели значение не кратное 1000. Мы можем выдать ${Math.round(credit/1000)*1000}.`);
    } else {
        alert("Похоже вам кредит не нужен. Всего доброго!")
    }
}
else if (age >= 22 && age <= 35) {
    credit = +prompt(`Мы можем вам выдать максимум 400000.
Введите сумму кратную 1000.`);
    if (credit % 1000 == 0 && isNaN(credit) == false && credit <= 400000) {
        alert(`Кредит размером ${credit} одобрен!`);
    }
    else if (credit % 1000 != 0 && isNaN(credit) == false && credit <= 400000) {
        alert(`Вы ввели значение не кратное 1000. Мы можем выдать ${Math.round(credit/1000)*1000}.`);
    } else {
        alert("Похоже вам кредит не нужен. Всего доброго!")
    }
}
else if (age >= 36 && age <= 65) {
    credit = +prompt(`Мы можем вам выдать максимум 1000000.
Введите сумму кратную 1000.`);
    if (credit % 1000 == 0 && isNaN(credit) == false && credit <= 1000000) {
        alert(`Кредит размером ${credit} одобрен!`);
    }
    else if (credit % 1000 != 0 && isNaN(credit) == false && credit <= 1000000) {
        alert(`Вы ввели значение не кратное 1000. Мы можем выдать ${Math.round(credit/1000)*1000}.`);
    } else {
        alert("Похоже вам кредит не нужен. Всего доброго!")
    }
}