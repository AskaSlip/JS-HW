// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер
// дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день,
// назву дня англійською).

const dayNumber =+prompt("Введіть порядковий номер дня тижня (1-7):");

switch (dayNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('?????');
}