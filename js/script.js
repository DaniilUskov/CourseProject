var spiderDiscrLong = "<p class='film-discr'><span style='font-weight:bold'>Человек-паук: Нет пути домой(2021) - </span>Жизнь и репутация Питера Паркера оказываются под угрозой, поскольку Мистерио раскрыл всему миру тайну личности Человека-паука. Пытаясь исправить ситуацию, Питер обращается за помощью к Стивену Стрэнджу, но вскоре всё становится намного опаснее.</p>";
var spiderDiscrShort = "<p class='film-discr'><span style='font-weight:bold'>Человек-паук: Нет пути домой(2021) - </span>Жизнь и репутация Питера Паркера оказываются под угрозой, поскольку Мистерио раскрыл всему миру тайну личности Человека-паука.</p>";

var unchartedShort = "<p class='film-discr'><span style='font-weight:bold'>Анчартед: На картах не значится (2022) - </span>Два искателя приключений Нейтан Дрейк и Виктор Салливан по прозвищу Салли отправляются на поиски величайшего сокровища мира.</p>";
var unchartedLong ="<p class='film-discr'><span style='font-weight:bold'>Анчартед: На картах не значится (2022) - </span>Два искателя приключений Нейтан Дрейк и Виктор Салливан по прозвищу Салли отправляются на поиски величайшего сокровища мира. Кроме того, они надеются найти улики, которые приведут их к давно потерянному брату Нейтана.</p>";

let elem1 = document.querySelector('#first-discr');
let elem2 = document.querySelector('#second-discr');

function start() {
	let hElem2 = window.getComputedStyle(elem2, false).height;
	hElem2 = Number(hElem2.slice(0, hElem2.length-2));
	elem1.style.height = hElem2 + 'px';
}

document.addEventListener("DOMContentLoaded", 
    function (event){
        if (window.screen.width < 1680){
            document.getElementById('discr').innerHTML = spiderDiscrShort;
            document.getElementById('discrUncharted').innerHTML = unchartedShort;
           }
           else 
           {
            document.getElementById('discr').innerHTML = spiderDiscrLong;
            document.getElementById('discrUncharted').innerHTML = unchartedLong;
           }
           start();
});


window.addEventListener("resize", function() {
    if (window.screen.width < 1680){
        document.getElementById('discr').innerHTML = spiderDiscrShort;
        document.getElementById('discrUncharted').innerHTML = unchartedShort;
       }
       else 
       {
        document.getElementById('discr').innerHTML = spiderDiscrLong;
        document.getElementById('discrUncharted').innerHTML = unchartedLong;
       }
       start();
}, false);


