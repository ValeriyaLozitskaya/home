let questions = [
    {
        text: 'Какой формат передачи данных наиболее распостранен?',
		answers: ['SQL', 'JSON', 'TXT'],
		correctAnswer: 1
    },
    {
        text: 'Выберите правильный вариант фрагмента XML файла:',
		answers: ['&lt;greeting&gt;Hello, world!&lt;/greeting&gt;', '&lt;greeting&gt;Hello, world!&lt;/&gt;', '&lt;greeting Hello, &gt;'],
		correctAnswer: 0
    },
    {
        text: 'Выберите правильный вариант фрагмента JSON файла:',
		answers: ['{"name": "Иван" }', '{‘name’: ‘Иван’ }', '{name: "Иван" }'],
		correctAnswer: 0
    },
];
localStorage.setItem('questions', JSON.stringify(questions));
let loSt = localStorage.getItem('questions')
loSt = JSON.parse(loSt);

$(function() {
   let html = $('#test').html();
   let content = tmpl(html, { questions: loSt });
   $('body').append(content);
	$('.clear').click(function(){
	   $('#answer').html('<h4 class="modal-title" id="myModalLabel">Сompleted</h4><br>');
	});
});

let yourAns = new Array;
let score = 0;

function Engine(question = 'Default question', answer = 'Default answer') {
   yourAns[question] = answer;
}

function Score() {
   let answerText = '<h4 class="modal-title" id="myModalLabel">Test results</h4><br>';
   for(let i = 0; i < yourAns.length; ++i) {
      let num = i + 1;
      answerText = answerText + '<p class="question">' + num + '. ' + loSt[i].text + '</p>';
      if(yourAns[i] != loSt[i].correctAnswer) {
         answerText = answerText + '<p class="bg-danger error">Correct answer: ' + loSt[i].answers[loSt[i].correctAnswer] + '</p>';
      } else {
         answerText = answerText + '<p class="bg-success correct">Correct! ' + loSt[i].answers[loSt[i].correctAnswer] + '</p>';
         ++score;
      }
   }

   answerText = answerText + '<h4 class="bg-info score">Score: ' + score + '</h4>';

   document.getElementById('answer').innerHTML = answerText;
   score = 0;
}
