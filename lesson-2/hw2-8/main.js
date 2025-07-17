// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду)
// місяця потрапляє це число (у першу, другу чи третю).

let day = 31;
if(day <= 0){
    console.log('error');
}else if ( day <= 11){
    console.log('first decade');
}else if (day <= 21){
    console.log('second decade');
}else if (day <= 31){
    console.log('third decade');
}else {
    console.log('too many days');
}