// ==UserScript== 
// @name Help Scout intake form Testing.Agency assessment 
// @namespace //testing.agency
// @version 0.1 
// @description Testing.Agency assessment 
// @author Ivan Doroshenko
// @match https://testing.agency/academy/test/hs-register/hs-register.html
// @grant none 
// ==/UserScript==  


$('input').attr("required", true);
//inject font awesome stylesheet
$('head').append('<link rel="stylesheet"href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"crossorigin="anonymous">');
// append style tag to the end of head with custom styling
$("<style type='text/css' id='userStyle'> .validParent{font-size:42px; font-weight:bold; background-color: #000; position: relative;} .fas {position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #3197d6;}</style>").appendTo("head");
$('fieldset input').click(function () {
    var input = $(this);
    inputId = '#' + input.attr('id');
    var inputClass = $(inputId);
    inputParent = (inputClass.parent());
    inputParent.addClass('validParent');
    inputClass.addClass('validInput');
    $('#userStyle').append('.validInput {background-color: lightgreen!important}');
    $('.validParent').append('<i class="fas fa-check"></i>');
});
