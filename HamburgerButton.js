
$(function(){
	$('#HamburgerMenu').hide();
	$('.Ham').click(function(){
	  if( $('#HamburgerMenu').css('display') == 'none') {
        $('#HamburgerMenu').slideDown();}else{
        $('#HamburgerMenu').slideUp();}
	});
});
