$(document).ready(function () {
    $("body").css("background","black");
    $(".infowork").css({
        "background":"black",
        "width":"100%",
        "height":"7vh",
        "color":"white",
        "justifyContent":"centre",
        "textAlign":"center",
        'box-shadow':'10px 10px 5px #888'
    });
    $(".infowork p").css({
        "fontSize":"12px",
        "color":"white",
        "position":"relative",
        "top":"4px",
        "fontFamily":"fantasy"
        
    });
    $(".information").css({
        "padding":"25px",
        "height":"132",
        "position":"relative",
        "top":"25px",
        "display":"flex",
        "color":"blue",
        "background":"aliceblue",
        "border":"5px solid"
        
    });
    $(".information p").css({
        "width":"100%",
        "fontSize":"8px",
        "lineHeight": "17px"
        
    });
    
    $(".information img").animate({
        
        "right":"86px"        
    },10000,function(){
        $(this).hide(6000).show(2000);
    });
   $(".information").hide();
   $(".infowork a").click(function (e) { 
   $(".information").toggle();
   
});
   $(".infowork a").hover(function () {
    $(this).css
    ({"background":"red",
       "color":"blue",
       "padding":"2px"});
        
    }, function () {
        $(this).css({"background":"black",
        "color":" yellow"});
       
    }
   );  
   $(".infowork a").css({
    "color": "blue",
   "fontSize": "12px"
});
   
  
    $(".offer img").animate(
        {
            "top":"-35px"
        },function(){
            $(this).animate({
                "top":"-32px",
               

            })       
         });
         $(".container p").css({
            "width": "292px",
            "fontSize": "9px",
            "margin": "16px",
            "lineHeight":"21px" 
         });
 

       
 $(".box .content  span").hide();
 $("button").css({
    "marginLeft": "18px",
    "fontSize": "10px",
    "background": "blue",
    "padding": "6px",
    "color": "black"
 });
 $("button").click(function (e) { 
    $(".box .content  span").slideToggle(1000);
    
 });
$("h3").css({
    "justifyContent": "center",
    "textAlign": "center",
    "color": "blue"
});
$(".box2").css({
    "padding": "92px",
    "fontSize": "12px",
    "color": "aliceblue"
});

$(".box2 .box1 .content").css({
    "background": "aliceblue",
    "padding": " 15px",
    "Height": "117px",
    " margin": "8px",
    "color": "black"
});
$(".box .content h4").css({
    "color": "blue",
   "padding" : "10px"
});
$(".box .content p").css({
    "fontSize": "9px",
   "padding" : "10px",
   "width": "302px",
   "lineHeight": "21px"
});


 
});
