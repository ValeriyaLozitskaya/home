'use strict'; // Проверяем на валидность
$(function() {
	var ajaxModule = function(){};
	ajaxModule.prototype = {
  		iterator: 1,
  		masonryTimeoutClear: "",

		init: function(request, callback) {
			var self = this;

			self.iterator++;

			request = encodeURIComponent(request.split());
			this.callAjax(request, callback);

			$(".result").html("").show();
		},
// ----------------------------------------------------------- Поиск элементов. Ajax запрос
		callAjax: function(request, callback) {
			var self = this;

			var ajaxRequest = $.ajax({
		  		url: "https://pixabay.com/api/?username=mjweaver01&key=2622948-ebcd3044eca820a8a712059c2&lang&q=" + request + "&image_type=photo",
		  		success: function(response) {
					self.parseResponse(response);
		  		},
		  		error: function(response) {
					console.log(response);
		  		}
			})

			ajaxRequest.then(function() {
		  		if(callback) {
					callback();
				}
			})
		},
// ----------------------------------------------------------- Вывод результатов
		parseResponse: function(response) {
			var self = this;

			$.each(response.hits, function(index, value) {
				$(".result").prepend("<div class='image image" + index + "' style='width:" + value.webformatWidth + "px; height:" + value.webformatHeight + "px; background: url(" + value.webformatURL + ");'><a href='" + value.pageURL + "' target='_blank'><div class='overlay'></div></a><div class='hidden'></div></div>");
				$(".image" + index + " .hidden").append("<div>User: <b>" + value.user + "</b></div><div>Tags: <b>" + value.tags + "</b></div><div class='stats'><i class='fa fa-eye'></i> <b>Views " + value.views + "</b> &nbsp; <i class='fa fa-thumbs-o-up'></i> <b> Likes " + value.likes + "</b></div><div class='direct-links'><a href='" + value.webformatURL + "' target='_blank'><i class='fa fa-link'></i>  Direct Link</a> <a href='" + value.webformatURL + "' download><i class='fa fa-download'></i> Download</a></div>");
			});
			if (response.hits == 0) {
				$(".result").prepend("<div class='error'>Sorrow, no result :(</div>");
			}

			clearTimeout(self.masonryTimeoutClear);
		},
	}
// ----------------------------------------------------------- Сохраняем и выводим значение с одной страницы на другю методом location.search
	var newModule = new ajaxModule();

	var Params = location.search.substring(5); // substring(5) - 5-тый эелемент после знака ?
	Params = decodeURIComponent(Params); // перекодируем что-бы можно было использовать любые знаки
	$('._sw').val(Params) // сохраняем значение в инпут
	newModule.init(Params); // выводим результаты поиска

// ----------------------------------------------------------- Метод умного поиска
	var timeoutClear;
	$("._sw").keyup(function() { // при вводе данных в поисковую строку автоматически выводим результаты поиска
		var keyword = $(this).val().toLowerCase();

		clearTimeout(timeoutClear);
		timeoutClear = setTimeout(function() {

			if(keyword || !keyword === "undefined") {
				newModule.init(keyword);
			}
		},500);
	});
// ----------------------------------------------------------- ООП в прототипном стиле
	function Human(name, age, gender, height, weight) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.height = height;
		this.weight = weight;
	}

	Worker.prototype = Object.create(Human.prototype);
	Worker.prototype.constructor = Worker;
	Student.prototype = Object.create(Human.prototype);
	Student.prototype.constructor = Student;

	Human.prototype.does = function() {
		console.log('mode: ' + this.work);
	}
	function Worker(name, age, gender, height, weight, workplace, sale) {
		Human.apply(this, arguments);
		this.workplace = workplace;
		this.sale = sale;
		this.work = 'Work';
	}

	function Student(name, age, gender, height, weight, study, sale) {
		Human.apply(this, arguments);
		this.study = study;
		this.sale = sale;
		this.work = 'Watch Serials';
	}

	var jack = new Worker('Jack', 24, 'male', 170, 75, 'Google', 7000 + '$');
	console.log(jack);
	jack.does();

	var lee = new Worker('Lee', 33, 'male', 175, 80, 'nVidia', 5000 + '$');
	console.log(lee);
	lee.does();

	var raz = new Student('Raz', 19, 'male', 185, 93, 'Cambridge', 900 + '$');
	console.log(raz);
	raz.does();

	var markus = new Student('Markus', 29, 'male', 165, 55, 'Harvard', 1200 + '$');
	console.log(markus);
	markus.does();
});
