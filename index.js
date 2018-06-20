
// ==UserScript== 
// @name Help Scout intake form Testing.Agency assessment 
// @namespace //testing.agency
// @version 0.1 
// @description Testing.Agency assessment 
// @author Ivan Doroshenko
// @match https://testing.agency/academy/test/hs-register/hs-register.html
// @grant none 
// ==/UserScript==  

$(function () {
    //inject font awesome stylesheet
    $('head').append('<link rel="stylesheet"href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"crossorigin="anonymous">');
    // append style tag to the end of head with custom styling
    $("<style type='text/css' id='userStyle'> .controls{position: relative;} .fas {position: absolute; right: 5px; top: 50%; transform: translateY(-50%);font-size: 24px;} .fa-check-circle {color: #077802;} .fa-times-circle {color: #a30102;} .validInput {background-color: #c1dcbd!important;} .invalidInput {background-color: #f1d9d9!important;} .d-none {display: none;} .d-block{display: block;} </style>").appendTo("head");
    var pass = $('fieldset input#password');
    var passParent = pass.parent();
    passParent.append('<div class="bullet__wrapper"><ul class="bullet__list_first"><li class="bullet__item"><span></span> One lowercase character</li><li class="bullet__item"><span></span> One uppercase character</li><li class="bullet__item"><span></span> One number</li></ul><ul class="bullet__list_second"><li class="bullet__item"><span></span> One special character</li><li class="bullet__item"><span></span> Eight characters minimum</li></ul></div>');
    $('.bullet__wrapper').addClass('d-none');

    // change style and input when input loose focus
    $('fieldset input').blur(function () {

        var id = $(this).attr('id');
        var val = $(this).val();
        var parent = $(this).parent();

        if (id != 'password') {
            parent.append('<span class="fas"></span>'); //add container for tick exclude password field
        }



        switch (id) {

            //validation input text for the company name
            case 'company':
                var regExp = /[A-Za-zа-яА-я][A-Za-zА-Яа-я	' -]+/; //regExp rule for Companies
                if (val.length > 1 && val.length < 40 && val != '' && regExp.test(val)) { //minimum length 2
                    // valid case
                    //add to container check tick if valid 
                    $(this).next('.fas').html('<i class="fas fa-check-circle"></i>');
                    $(this).removeClass('invalidInput').addClass('validInput'); //valid style
                    parent.removeClass('invalidParent').addClass('validParent'); //valid style
                    //placeholder style
                    $('#userStyle').append('::-webkit-input-placeholder {color: #237bb1!important;}');
                }
                else {
                    // invalid case
                    //add to container cross tick if valid 
                    $(this).next('.fas').html('<i class="fas fa-times-circle"></i>')
                    $(this).removeClass('validInput').addClass('invalidInput'); //invalid style
                    parent.removeClass('validParent').addClass('invalidParent'); //invalid style
                    //placeholder style
                    $('#userStyle').append('::-webkit-input-placeholder {color: #fff!important;} .fa-times{display: inline;}');
                }

                break;

            // validation First Name and Last Name (common rules)
            case 'fname':
            case 'lname':
                var regExp = /^[a-zA-Zа-яА-Я]+$/; //regExp rule for First and Last Name
                if (val.length > 1 && val.length < 30 && val != '' && regExp.test(val)) { //minimum length 2
                    // valid case
                    //add to container check tick if valid 
                    $(this).next('.fas').html('<i class="fas fa-check-circle"></i>');
                    $(this).removeClass('invalidInput').addClass('validInput'); //valid style
                    parent.removeClass('invalidParent').addClass('validParent'); //valid style
                    //placeholder style
                    $('#userStyle').append('::-webkit-input-placeholder {color: #237bb1!important;}');
                }
                else {
                    // invalid case
                    //add to container cross tick if valid 
                    $(this).next('.fas').html('<i class="fas fa-times-circle"></i>');
                    $(this).removeClass('validInput').addClass('invalidInput'); //invalid style
                    parent.removeClass('validParent').addClass('invalidParent'); //invalid style
                    //placeholder style
                    $('#userStyle').append('::-webkit-input-placeholder {color: #fff!important;} .fa-times{display: inline;}');
                }
                break;

            case 'email':
                //regExp rule for email
                var regExp = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if (val != '' && regExp.test(val)) {
                    // valid case
                    //add to container check tick if valid 
                    $(this).next('.fas').html('<i class="fas fa-check-circle"></i>');
                    $(this).removeClass('invalidInput').addClass('validInput'); //valid style
                    parent.removeClass('invalidParent').addClass('validParent'); //valid style
                    //placeholder style
                    $('#userStyle').append('::-webkit-input-placeholder {color: #237bb1!important;}');
                }
                else {
                    // invalid case
                    //add to container cross tick if valid 
                    $(this).next('.fas').html('<i class="fas fa-times-circle"></i>')
                    $(this).removeClass('validInput').addClass('invalidInput'); //invalid style
                    parent.removeClass('validParent').addClass('invalidParent'); //invalid style
                    //placeholder style
                    $('#userStyle').append('::-webkit-input-placeholder {color: #fff!important;} .fa-times{display: inline;}');
                }
                break;

            case 'password':
                var parent = $(this).parent();
                $(parent).find('.bullet__wrapper').removeClass('d-block').addClass('d-none');
                break;
        } //end switch


    }); //end blur
    $('#password').on('focus', function () {
        var parent = $(this).parent();
        $(parent).find('.bullet__wrapper').removeClass('d-none').addClass('d-block');

    });

});
