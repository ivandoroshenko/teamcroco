// ==UserScript== 
// @name Help Scout intake form Testing.Agency assessment 
// @namespace //testing.agency
// @version 0.1 
// @description Testing.Agency assessment 
// @author Ivan Doroshenko
// @match https://testing.agency/academy/test/hs-register/hs-register.html
// @grant none 
// ==/UserScript==  

//add validation to the input
$('input').attr("required", true)
//inject font awesome stylesheet
$('head').append('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">');
// append style tag to the end of head with custom styling
$('head').append('<style type="text/css" id="userStyle"></style>');
// styling input onblur
$("#company").focusout(function () { $('.controls').append('<i class="fas fa-check"></i>');$('#userStyle').append('#company:valid {background-color: lightgreen}'); $('#userStyle').append('.controls {position: relative}');$('#userStyle').append('.fa-check {position: absolute; right: 10px; top: 50%; transform: translateY(-50%)}');});
