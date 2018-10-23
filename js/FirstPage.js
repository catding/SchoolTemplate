/**
 * Created by MZB on 4/23/2017.
 */
$(document).ready(function() {

    //here is public static void main
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.modal').modal();
    $('.collapsible').collapsible();
    $('.slider').slider({
        interval : 7000,
        transition : 1000
    });
    $('.materialboxed').materialbox();

    document.querySelector("#sidenav-closer").onclick = function () {
        $('.button-collapse').sideNav('hide');
    };



    var input1 = new myNameSpace2.formValidating();
    input1.setCurrentInput("userNameField");
    input1.getCurrentInput().onblur = function () {
        input1.checkEmpty();
    };

    var input2 = new myNameSpace2.formValidating();
    input2.setCurrentInput("passwordField");
    input2.getCurrentInput().onblur = function () {
        input2.checkEmpty();
    };

    var menu = document.querySelector("#menu");

    //be careful about one ting here we must set the height of name and logo of the school first
    window.onscroll = function() {myFunction()};

    function myFunction() {

         if (document.body.scrollTop > 150){

             document.querySelector("#menu").parentElement.className  = "row navbar-fixed myNavFixes"
         } else if (document.body.scrollTop < 150){

             document.querySelector("#menu").parentElement.className  = "row"
         }


    }

});

