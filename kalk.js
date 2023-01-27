/*$('#but').on('click',function(){
    alert ('Считаю');
});*/
/* Формула расчета стоимости услуг*/
$ ('#but').on('click',function(){
    let face=(3000)
    let setting=(5000)   
    let page= Number ($ ( '#page').val())
    let func= Number ($ ( '#func').val())
    
    $ ('#res').html(face*page + setting*func)});

/* Отмена в инпутах букв символов и пробелов*/
$ ('#page').on ( 'input', function (){ 
    $ (this).val ($ (this).val().replace (/[A-Za-zA-Яа-яЕе]/, ''))
    $ (this).val ($ (this).val().replace (/[@,!#$%^&*()_+=?/>.,<-]/, ''))
    $ (this).val ($ (this).val().replace ("",''))
    })
    $ ('#func').on ( 'input', function (){ 
        $ (this).val ($ (this).val().replace (/[A-Za-zA-Яа-яЕе]/, ''))
        $ (this).val ($ (this).val().replace (/[@,!#$%^&*()_+=?/>.,<-]/, ''))
        $ (this).val ($ (this).val().replace ("",''))
        })
/* Условие для Чекбокса:если чек бокс не отмечен, то его значение приравнивается к 0
$ ('#but').on ('click', function (){ 
if ($(this).is(':checked')){
    $('#page,#func').val();
} else {
    $('#page,#func').val(0);
}})
*/
const input = document.querySelector('input[type=text]'),
      checkbox = document.querySelector('input[type=checkbox]');
checkbox.onchange = function() {
  input.disabled = !checkbox.checked;
}