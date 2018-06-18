
// ==UserScript== 
// @name Help Scout intake form Testing.Agency assessment 
// @namespace //testing.agency
// @version 0.1 
// @description Testing.Agency assessment 
// @author Ivan Doroshenko
// @match https://testing.agency/academy/test/hs-register/hs-register.html
// @grant none 
// ==/UserScript==  

//inject font awesome stylesheet
$('head').append('<link rel="stylesheet"href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"crossorigin="anonymous">');
// append style tag to the end of head with custom styling
$("<style type='text/css' id='userStyle'> .controls{position: relative;} .fas {position: absolute; right: 10px; top: 50%; transform: translateY(-50%);font-size: 18px;} .fa-check {color: #00cc00} .fa-times {color: #BF3030;} .validInput {background-color: lightgreen!important;} .invalidInput {background-color: #ff1111!important;}</style>").appendTo("head");
$('fieldset input').focus(function () {
var input = $(this);
var inputType = $(input).attr('type');
switch(inputType) {
case 'email':
$(input).attr('pattern', /.+@.+..+/i);
break;
case 'text':
console.log('text');
break;
}
inputId = '#' + input.attr('id');
var inputSelector = $(inputId);
inputParent = (inputSelector.parent());
// valid case
inputParent.addClass('validParent');
inputSelector.addClass('validInput');
$('.validParent').append('<i class="fas fa-check"></i>');
$('#userStyle').append('::-webkit-input-placeholder {color: #237bb1!important;}');
// invalid case
// inputSelector.addClass('invalidInput');
// inputParent.addClass('invalidParent');
// $('.invalidParent').append('<i class="fas fa-times"></i>');
// $('#userStyle').append('::-webkit-input-placeholder {color: #fff!important;}');
});