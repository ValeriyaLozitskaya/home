$(document).ready(function () {
    
    
    $('.container').myCarousel();

    
    var data = {
        name: 'Лозицкая Валерия Валериевна',
        photo: {
            src: 'img/2.jpg',
            alt: 'Моё фото'
        },
        job: 'Студеннтка курса GoFrontend Online',
        why: 'Хочу учить фронтенд, потому что:',
        reasons: ['Мне это интересно',
                  'Хочу работать умственно',
                  'Обеспечить свое счастливое будущее', 
                  'Хочу работать удаленно'],
        tel: 'Мой контактный телефон:',
        number: '+380989115378',
        fb: 'Мой профиль в контакте:',
        fb_link: 'https://vk.com/lozitskaya_valeriya',
        feedback: 'Мой фидбек:',
        feedback_text: 'Учиться никогда не поздно!'
    };
    
    var profile = $('#profile').html();
    var content = tmpl(profile, data);

    $('.template').append(content);
    
});

