// – Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати, коли введені рівні числа.

const firstNumber = +prompt("Введіть перше число:");
const secondNumber = +prompt("Введіть друге число:");

if (firstNumber > secondNumber) {
    console.log(`Максимальне число: ${firstNumber}`);
}else if (firstNumber < secondNumber) {
    console.log(`Максимальне число: ${secondNumber}`);
}else {
    console.log("Числа рівні.");
}