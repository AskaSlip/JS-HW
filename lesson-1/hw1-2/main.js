// – Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)
const firstName = "Анна";
const middleName = "Володимирівна";
const lastName = "Сліпченко";
const person = `${lastName} ${firstName} ${middleName}`;
console.log(person);