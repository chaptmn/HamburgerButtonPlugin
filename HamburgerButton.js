
$(function(){

 var Hamburger = function(){

   var _HamburgerMenu = $('#HamburgerMenu'),
       _Ham = $('.Ham'),
       _HambEvent;

   _HamburgerMenu.hide();

  _HambEvent = function(){
    _Ham.click(function(){
      if(_HamburgerMenu.css('display') == 'none') {
          _HamburgerMenu.slideDown()
         }else{
          _HamburgerMenu.slideUp();}
        });
    };
    _HambEvent();
 };
 Hamburger();

});
