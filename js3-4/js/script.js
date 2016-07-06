var test = {
    header: '<H3>Тест по программированию</H3>',
    question: ['Вопрос №1', 'Вопрос №2',' Вопрос №3'],
    checkboxname: ['checkbox-one', 'checkbox-two', 'checkbox-three',
                   'checkbox-four', 'checkbox-five', 'checkbox-six',
                   'checkbox-seven', 'checkbox-eight', 'checkbox-nine'],
    id: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3',
            'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3',
            'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
    submit: 'Проверить мои результаты'
}
var s = 0;

var wrapper = document.createElement('div');
var parent = document.body;
wrapper.className = 'row-fluid';
parent.appendChild(wrapper);

var grid = document.createElement('div');
wrapper.appendChild(grid);
grid.className = 'span12';

// HEADER
var header = document.createElement('header');
grid.appendChild(header);
header.innerHTML = test.header;

// MAIN
var main = document.createElement('main');
grid.appendChild(main);
    // OL
    var form = document.createElement('form');
    main.appendChild(form);
    var ol = document.createElement('ol');
    form.appendChild(ol);
    form.action = '#BITCH';
        // LI
        for (i = 0; i < test.question.length; i++) {
            var li = document.createElement('li');
            ol.appendChild(li);
            var h5 = document.createElement('h5');
            h5.innerHTML = test.question[i];
            li.appendChild(h5)
            // INPUT
            for (j = 0; j < 3; j++) {
                // P
                var p = document.createElement('p');
                li.appendChild(p);
                // CHECKBOX
                var checkbox = document.createElement('input');
                p.appendChild(checkbox);
                checkbox.type = 'checkbox';
                checkbox.name = test.checkboxname[s];
                checkbox.id = test.id[s];
                // LABEL
                var label = document.createElement('label');
                label.htmlFor = test.id[s];
                label.className = 'textbox';
                label.appendChild(document.createTextNode(test.answer[s]));
                p.appendChild(label);
                s++;
            }
        }
    // DIV
    var div = document.createElement('div');
    form.appendChild(div);
    div.className = 'button--config';
        // BUTTON
        var button = document.createElement('button');
        button.type = 'submit';
        button.className = 'btn';
        button.innerHTML = test.submit;
        div.appendChild(button);
