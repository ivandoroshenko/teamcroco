// ==UserScript== 
// @name Help Scout intake form Testing.Agency assessment 
// @namespace //testing.agency
// @version 0.1 
// @description Testing.Agency assessment 
// @author Ivan Doroshenko
// @match https://testing.agency/academy/test/hs-register/hs-register.html
// @grant none 
// ==/UserScript==  

// sorry for long lines! Console does not accept multiline command :_(

//add validation to the input
$('input').attr("required", true)
//inject font awesome stylesheet
$('head').append('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">');
// append style tag to the end of head with custom styling
$('head').append('<style type="text/css" id="userStyle"></style>');
//     var inputList = $$('fieldset input');/* // put inputs into the loop, get their "id" and set them as classes to parent "divs" */for (var i = 0; i <= inputList.length; i++) { var input = $(inputList)[i]; var inputId = $(input).attr('id'); var inputParent = $(input).parent(); var inputParentClass = $(inputParent).attr('class'); inputParentClass = inputId; $(this).focus(function () { console.log($(this))}); }

    // styling input onblur
    // $("#company").focusout(function () {var parent = $(this).parent.css();$('.controls').append('<i class="fas fa-check"></i>');$('#userStyle').append('#company:valid {background-color: lightgreen}'); $('#userStyle').append('.controls {position: relative}');$('#userStyle').append('.fa-check {position: absolute; right: 10px; top: 50%; transform: translateY(-50%)}');});
$('input').focus(function () { if ($(this).closest('fieldset')) { var inputType = $(this).attr('type'); if (inputType == 'text') { console.log('text') } else if (inputType == 'email') { console.log('email') } else if (inputType == 'password') {console.log('password')} $(this).addClass('validate[required,custom[onlyLetter],length[0,100]] text-input')}})
$('input').focusout(function () { if ($(this).closest('fieldset')) { var inputId = $(this).attr('id'); var inputParent = $(this).parent(); var inputParentClass = $(inputParent).attr('class'); inputParentClass = inputId; $('.validParent').append('<i class="fas fa-check"></i>'); $('.invalidParent').append('<i class="fas fa-times"></i>'); $('#userStyle').append('.controls {position: relative}'); $('#userStyle').append('.fa-check {position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: red}'); $('#userStyle').append('.valid{background-color: lightgreen}');} })

