




// start loading page




$(window).on("load",function(){
    $(".load").hide()
    $(".contentPage").show()
    
  })
  
  // end loading page







// start navbar all width device



$(".collapseBtn").click(function() {
    $(".navWidthSmall").animate({"right":"0"},500)
 })
 
 $(".closeNavMobile").click(function() {
     $(".navWidthSmall").animate({"right":"-600"},500)
 })
 
 
 
 
 $(".toggle-icon").click(function() {
 
     if($(this).attr("toggleIcon") === "0") {
     $(".sub-menu:eq("+ $(".toggle-icon").index(this) +")").slideDown()
     $(this).children().attr("class","las la-minus")
         $(this).attr("toggleIcon","1")
     } else {
         $(".sub-menu:eq("+ $(".toggle-icon").index(this) +")").slideUp()
         $(this).children().attr("class","las la-plus")
             $(this).attr("toggleIcon","0")
     }
 
 })
 
 
 
 
 
 $(".toggle-inside-icon").click(function() {
 
     if($(this).attr("toggleInsideIcon") === "0") {
        $(".sub-menu-shopGrid:eq("+ $(".toggle-inside-icon").index(this) +")").slideDown()
        $(this).children().attr("class","las la-minus")
        $(this).attr("toggleInsideIcon","1")
     } else {
        $(".sub-menu-shopGrid:eq("+ $(".toggle-inside-icon").index(this) +")").slideUp()
        $(this).children().attr("class","las la-plus")
        $(this).attr("toggleInsideIcon","0")
     }
 
    
 })
 
 
 
 $(".item-nav-home").hover(function() {
     $(".iTemsDropdownHome").fadeToggle(500)
 })
 
 
 
 $(".item-nav-pages").hover(function() {
     $(".iTemsDropdownPages").fadeToggle()
 })
 
 $(".item-nav-blog").hover(function() {
     $(".iTemsDropdownBlog").fadeToggle()
 })
 
 
 $(".searchAreaBtn").click(function() {
     $(this).siblings().focus();
 })
 // end navbar all width device
 














$(".lab-count").on("click", function() {
  if ($(this).attr("num") === "1") {
  $(".country").slideDown(500)
    $(".fa-caret-down").css({"transform": "rotate(180deg)"})
    $(this).attr("num", "0")
}
else {
        $(".country").slideUp(500)
        $(".fa-caret-down").css({"transform": "rotate(360deg)"})
        $(this).attr("num", "1")
    }
}) 



// start click dropdown


$(".select").click(function() {
    if($(this).attr("num1") === "1") {
        $(".country").slideDown(500)
        $(".fa-caret-down").css({"transform": "rotate(180deg)"})
        $(this).attr("num1", "0")
    } else {
        $(".country").slideUp(500)
        $(".fa-caret-down").css({"transform": "rotate(360deg)"})
        $(this).attr("num1", "1")
    }
})



$(".country li").click(function() {
    $(".country li").removeClass("bold")
    $(this).addClass("bold")
    $(".text-count").text($(this).text())
    $(".country").slideUp(500)
    $(".text-count").addClass("bold")
    $(".fa-caret-down").css({"transform": "rotate(360deg)"})
    $(".input-select").attr("value", $(this).text())
})



// end click dropdown




// start click label create account


$(".ico0").click(function() {
if($(this).attr("checkAC") === "0"){
            $(".account").css({"border":"2px solid #000"});
            $(".account i").css({"visibility":"visible","opacity":"1"})
            $(this).attr("checkAC","1");
} else{
    $(".account").css({"border":"2px solid #999999"});
    $(".account i").css({"visibility":"hidden"})
    $(this).attr("checkAC","0");
}
})



$(".ico1").on("click",function() {
    if($(this).attr("check") === "0") {
       $(".ship-btn").css({"border":"2px solid #000"});
       $(".ship-btn i").removeClass("none").animate({"opacity":"1"},500);
       $(this).attr("check","1")
       $(".shipping-form").slideDown(500);
  } else {
   $(".ship-btn").css({"border":"2px solid #999999"});
   $(".ship-btn i").addClass("none").animate({"opacity":"0"},500);;
   $(".shipping-form").slideUp(500)
   $(this).attr("check","0")

  }
}) 


// $(".label-account").on("click",function() {
//     if($(this).attr("toggleCheck") === "0") {
//         $(".account").css({"border":"2px solid #000"});
//         $(".ico0 .fa-check").removeClass("none").animate({"opacity":"1"},500);
//         $(this).attr("toggleCheck","1");
//     } else {
//         $(".account").css({"border":"2px solid #999999"});
//         $(".ico0 .fa-check").addClass("none").animate({"opacity":"0"});
//         $(this).attr("toggleCheck","0");

//     }
 
// })

// $(".account").on("click",function() {
//     if($(this).attr("toggleCheck1") === "0") {
//         $(this).css({"border":"2px solid #000"});
//         $(".ico0 .fa-check").removeClass("none").animate({"opacity":"1"},500);
//         $(this).attr("toggleCheck1","1");

//     } else {
//         $(this).css({"border":"2px solid #999999"});
//         $(".ico0 .fa-check").addClass("none").animate({"opacity":"1"},500);
//         $(this).attr("toggleCheck1","0");
//     }
// })



// start ship form 



// $(".ico1").on("click",function() {

//     if($(this).attr("check") === "0") {
//     $(".shipping-form").slideToggle(500);
//         $(".ship-btn").css({"border":"2px solid #000"});
//         $(".ship-btn i").removeClass("none").animate({"opacity":"1"},500);
//         $(this).attr("check","1")
//     }

//     //  else {
//     //     $(".ship-btn").css({"border":"2px solid #999999"});
//     //     $(".ico1 .fa-check").addClass("none").animate({"opacity":"0"});
//     //     $(this).attr("toggleCheck3","0");

//     // }
 
// })




// $(".ico1").on("click",function() {
//     if($(this).attr("checkAC") === "0") {
//          $(".ship-btn").css({"border":"2px solid #000"});
//          $(".ship-btn i").removeClass("none").animate({"opacity":"1"},500);
//          $(this).attr("checkAC","1")
//     } else {
//      $(".account").css({"border":"2px solid #999999"});
//      $(".account i").addClass("none").animate({"opacity":"1"},500);
//      $(this).attr("checkAC","0")
 
//     }
//  }) 





// end click checkbox and dropdownlist



// start click radio in total cart


$(".single-mthd").click(function() {
    $(".single-mthd span").css("background", "transparent")
    $(".single-mthd span i").css("visibility", "hidden")
    $(".single-mthd p").hide()
    $(this).children("span").css({"background": "#0163D2"}).children("i").css("visibility", "visible").parent().siblings("p").css("background", "transparent").show(500);  
})

    $(".agree-mthd").click(function(event) {
    if($(this).attr("togle") === "0") {
        $(this).children("span").css({"background": "#0163D2"}).children().css("visibility", "visible")
        $(this).attr("togle", "1")
        $(".alert-smooth").fadeIn(500).css("opacity","1");
        $(".content").css("opacity","0.3");
        $(".content").attr("alert","1");
        
    } else {
        $(this).children("span").css({"background": "transparent"}).children().css("visibility", "hidden")
        $(".alert-smooth").fadeOut(500)
        $(this).attr("togle", "0");
        $(".content").css("opacity","1");
    }


    })

    

    $(".content").on("mousedown",function() {
        $(".agree-mthd").children("span").css({"background": "transparent"}).children("i").css("visibility", "hidden")
        $(".agree-mthd").attr("togle", "0");
        $(".alert-smooth").fadeOut(500);
        $(".content").css("opacity","1");
    });


    $(window).on("keyup",function(event) {
            if(event.which === 27) {
                $(".agree-mthd").children("span").css({"background": "transparent"}).children("i").css("visibility", "hidden")
                $(".agree-mthd").attr("togle", "0");
                $(".alert-smooth").fadeOut(500);
                $(".content").css("opacity","1");
            }
    })

    $(window).on("keyup",function(event) {
       if(event.which === 13) {
        $(".alert-smooth").fadeOut(500);
        $(".content").css("opacity","1");
       }
    })

    // window.onkeyup = function(event) {
    //     if(event.which === 27) {
    //         console.log("sssssssssssss");
    //     }
    // }

    // var escape = event.which;

    // if(event.which === 13) {
    //     console.log(event.which);

    // }


     
  

    
 
   


    // $(".content").on("click",function(event) {

    //     $(this).on(event);


    //     $(".alert-smooth").fadeOut(500)
    //     $(".content").css("opacity","1");
    // })


    $(".alert-smooth i:first-child").click(function() {   
        $(".alert-smooth").fadeOut(500)
        $(".content").css("opacity","1");
        $(".agree-mthd").children("span").css({"background": "transparent"}).children().css("visibility", "hidden")
    })


    $(".btn-success").click(function() {
        $(".alert-smooth").fadeOut(500);
        $(".content").css("opacity","1");
    })

    $(".btn-danger").click(function() {
        $(".alert-smooth").fadeOut(500);
        $(".content").css("opacity","1");
        $(".agree-mthd").children("span").css({"background": "transparent"}).children().css("visibility", "hidden")

    })
// end click radio in total cart




