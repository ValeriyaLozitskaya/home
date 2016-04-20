var names = [];

for (var i = 0; i < 5; i++) {
    var Name = prompt('Введите имя');
    names.push(Name);
    console.log(names);
}

a = prompt('enter name');

for (var i = 0; i < 5; i++) {
 console.log(names.indexOf(a))
}