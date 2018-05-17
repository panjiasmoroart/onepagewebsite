$(document).ready(function(){

    //jika user menscroll mouse
	$(window).scroll(function() {
        if ($(this).scrollTop() >= 350) {
            $('menu').addClass('stiky').slideDown("fast");

            // event got top
            $('.go-top').fadeIn(200);
        }
        else {
            $('menu').removeClass('stiky').fadeIn(500);

            // event got top
            $('.go-top').fadeOut(200); 

        }
	});


    //tampung variable class dari bootsrap ke javascript untuk di event
	var heightmenu     = $(".menu-fix").height();
        heightheader   = $(".header").height();  
        heightprofile  = $(".profile").height();
        heightskill    = $(".skill").height();  
        heightskillgallery = $(".skill-gallery").height();  
        heightcontact = $(".background-back").height();

     //buat event click    
    $(".mhome").click(function(){
    	var shome = heightmenu;
    	//shome - margin yg ada dicss .lorem
    	$("body, html").animate({scrollTop:shome - 100}, 900);
    });       

    $(".mprofile").click(function(){
    	var sprofile = heightmenu  + heightheader ;
    	//shome - margin yg ada dicss .lorem
    	$("body, html").animate({scrollTop:sprofile + 65}, 900);
    });  


    $(".mskills").click(function(){
    	var skills = heightmenu  + heightheader +  heightprofile;
    	//shome - margin yg ada dicss .lorem
    	$("body, html").animate({scrollTop:skills + 300}, 900);
    });   

    $(".mcontact").click(function(){
    	var scontact = heightmenu  + heightheader +  heightprofile +  heightskill + heightskillgallery;
    	$("body, html").animate({scrollTop:scontact + 550}, 900);
    });      

    $(".mlocation").click(function(){
    	var slocation = heightmenu  + heightheader +  heightprofile +  heightskill + heightskillgallery + heightcontact;
    	$("body, html").animate({scrollTop:slocation + 740}, 900);
    });  

    $('.go-top').click(function(event){
        event.preventDefault(); 
        $('html, body').animate({scrollTop: 0}, 300);
    }); 



});