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
$(function () {
    //inject font awesome stylesheet
    $('head').append('<link rel="stylesheet"href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"crossorigin="anonymous">');
    // append style tag to the end of head with custom styling
    $("<style type='text/css' id='userStyle'> .controls{position: relative;}\
                .validInput {background-color: #c1dcbd!important;} \
                .invalidInput {background-color: #f1d9d9!important;} \
                body {position: relative;}\
                .bullet__wrapper{width: 100%; margin: 0; padding: 0; display: flex; flex-flow: row wrap;} \
                .bullet__list {width: 45%; margin: 5px 0 0 0; padding: 6px 0; list-style: none; text-align: left;}\
                    .bullet__item {color: #9da0aa; margin: 0 0 10px 0; padding: 0 0 0 30px; display: flex; align-items: center; position: relative; opacity: 0; transition: opacity 1s ease-out;} \
                    .bullet__item:last-child {margin: 0;} \
                    .bullet__item:before {content: ''; position: absolute; display: block; width: 7px; height: 7px; border-radius: 50%; background-color: #3197d6; z-index: 10; left: 10px; opacity: inherit;}\
                    .animated {opacity: 1;}\
                .d-block{display: block;} \
                .d-none {display: none;} \
                .fas {position: absolute; right: 5px; top: 4px; font-size: 24px;} \
                .fas--password {right: 70px;}\
                .fas--close {right: 20px; cursor: pointer; display: block;}\
                    .fa-check-circle {color: #077802;} \
                    .fa-times-circle {color: #a30102;} \
                .modal_wrap {height: 80%; width: 80%; position: absolute; top: 55%; left: 50%; transform: translate(-50%, -50%);\
                        z-index: 99; }\
                    #modal {height: 100%; width: 100%;}\
                    .overlay {width: 100vw; height: 100vh; background: #9aa6b1; opacity: 0.8; position: fixed; z - index: 99;}\
                    .fixed_overlay{height: 100%; overflow: hidden; width: 100vw;}\
                </style>").appendTo("head");

    // append bullet point hints to pass field
    var pass = $('fieldset input#password');
    var passParent = pass.parent();
    passParent.append('<div class="bullet__wrapper"><ul class="bullet__list">\
                <li class="bullet__item">One lowercase character</li>\
                <li class="bullet__item">One uppercase character</li>\
                <li class="bullet__item">One number</li>\
                </ul>\
                <ul class="bullet__list">\
                <li class="bullet__item">One special character</li>\
                <li class="bullet__item">Eight characters minimum</li>\
                </ul></div>');
    // hide bullet list when unfocus
    $('.bullet__list').addClass('d-none');
    var containerParent = $('fieldset input').parent();
    containerParent.append('<span class="fas"></span>'); //append container
    // append modal window
    $('body').append('<div class="modal_wrap"></div>').prepend('<div class="overlay"></div>');
    // make overlay invisible
    $('.overlay').addClass('d-none');
    // append iframe with sided url
    $('.modal_wrap').append('<iframe id="modal" name="modal">Test</iframe>').addClass('d-none');
    // add close button
    $('.modal_wrap').append('<span class="fas fas--close"></span>');
    // get array of links
    var linkList = $('p#agree a');
    // loop for counting links
    for (var i = 0; i < linkList.length; i++) {
        // get each link
        var link = $(linkList)[i];

        // exclude "Security Policy"
        if ((link.innerHTML) != 'Security Policy.') {
            // set name of "iframe" to link's target
            $(link).attr('target', 'modal');
            // modal window
            //  change https links
            if ($(link).attr('href') == 'http://www.helpscout.net/company/terms-of-service/') {
                $(link).attr('href', 'https://www.helpscout.net/company/legal/terms-of-service/');
            }
            if ($(link).attr('href') == 'http://www.helpscout.net/company/privacy/') {
                $(link).attr('href', 'https://www.helpscout.net/company/legal/privacy/');
            }
            $(link).click(function (event) {
                // make modal window visible
                $('.overlay, .modal_wrap').removeClass('d-none');
                // disable scroll for body
                $('body').addClass("fixed_overlay");
                // make close button visible after 2 seconds
                $('.modal_wrap').ready(function () {

                    $('.fas--close').html('<i class="fas fa-times"></i>');
                });


            }); 
            // close modal in 3 cases press close button, out of the modal, press "esc"
            $(document).bind("click keydown", function (event) {
                closeModal = event.target;
                escapeClose = event.which;
                if ($(closeModal).hasClass("fas--close") || $(closeModal).parent().hasClass("fas--close") || $(closeModal).hasClass("overlay") || escapeClose == 27) {
                    // hide modal and overlay
                    $('.modal_wrap, .overlay').addClass('d-none');
                    // allow scroll for body
                    $('body').removeClass("fixed_overlay");
                }

            }); /* end document.bind */
        } /* end exclude Security policy function */

    } /* end loop for counting inputs */
    // change style and input when input loose focus
    $('fieldset input').blur(function () {
        var input = $(this);
        var id = $(this).attr('id');
        var val = $(this).val();
        var parent = $(this).parent();
        // declare function for valid case
        $.fn.validFunction = function () {
            // valid case
            //add to container check tick if valid 
            $(input).next('.fas').html('<i class="fas fa-check-circle"></i>');
            $(input).removeClass('invalidInput').addClass('validInput'); //valid style
            parent.removeClass('invalidParent').addClass('validParent'); //valid style
            //placeholder style
            $('#userStyle').append('::-webkit-input-placeholder {color: #237bb1!important;}');
        }
        // declare function for invalid case
        $.fn.invalidFunction = function () {
            // invalid case
            //add to container cross tick if valid 
            $(input).next('.fas').html('<i class="fas fa-times-circle"></i>')
            $(input).removeClass('validInput').addClass('invalidInput'); //invalid style
            parent.removeClass('validParent').addClass('invalidParent'); //invalid style
            //placeholder style
            $('#userStyle').append('::-webkit-input-placeholder {color: #fff!important;} .fa-times{display: inline;}');
        }

        switch (id) {
            //validation input text for the company name
            case 'company':
                var regExp = /[A-Za-zа-яА-я][A-Za-zА-Яа-я	' -]+/; //regExp rule for Companies
                if (val.length > 1 && val.length < 40 && val != '' && regExp.test(val)) { //minimum length 2
                    $.fn.validFunction();
                }
                else {
                    $.fn.invalidFunction();
                }
                break;

            // validation First Name and Last Name (common rules)
            case 'fname':
            case 'lname':
                var regExp = /^[a-zA-Zа-яА-Я]+$/; //regExp rule for First and Last Name
                if (val.length > 1 && val.length < 30 && val != '' && regExp.test(val)) { //minimum length 2
                    $.fn.validFunction();
                }
                else {
                    $.fn.invalidFunction();
                }
                break;

            case 'email':
                //regExp rule for email
                var regExp = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if (val != '' && regExp.test(val)) {
                    $.fn.validFunction();
                }
                else {
                    $.fn.invalidFunction();
                }
                break;

            case 'password':
                // remove bulletpoints onblur
                $(parent).find('.bullet__list').slideUp(900);
                //regExp rule for password
                var regExp = /^(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d)+/;
                if (val.length > 7 && regExp.test(val)) {
                    // valid case
                    //add to container check tick if valid 
                    parent.find('.fas').html('<i class="fas fa-check-circle"></i>').addClass('fas--password');
                    $(this).removeClass('invalidInput').addClass('validInput'); //valid style
                    parent.removeClass('invalidParent').addClass('validParent'); //valid style
                    //placeholder style
                    $('#userStyle').append('::-webkit-input-placeholder {color: #237bb1!important;}');

                }
                else {
                    // invalid case
                    //add to container cross tick if valid 
                    parent.find('.fas').html('<i class="fas fa-times-circle"></i>').addClass('fas--password');
                    $(this).removeClass('validInput').addClass('invalidInput'); //invalid style
                    parent.removeClass('validParent').addClass('invalidParent'); //invalid style
                    //placeholder style
                    $('#userStyle').append('::-webkit-input-placeholder {color: #fff!important;} .fa-times{display: inline;}');

                }
        } //end switch

    }); //end blur
    $('#password').on('focus', function () {
        var parent = $(this).parent();
        $(parent).find('.bullet__list').removeClass('d-none').addClass('d-block');
        $('.bullet__list').slideDown(900);
        $('.bullet__item').addClass('animated');
    });
}); /* end document ready function */