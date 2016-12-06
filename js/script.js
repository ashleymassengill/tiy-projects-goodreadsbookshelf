$(document).ready(function(event){
  $(".fa-bars").click(function(){
    $(".mainnav li").slideToggle("slow");
    console.log ("nav toggle working");
  });
});

$(document).ready(function(event){
  $(window).resize(function(){
    if ($(window).width() <= 767){
      $(".book").click(function(){
        $(".hover").slideToggle("slow");
        console.log (".hover toggle working");
      });
    };
  });
});

// $(document).ready(function(event){
//   $(window).resize(function(){
//     if ($(window).width(>=768) && $(window).width(<=1024)){
//       $(".book img").click(function(){
//         $(".hover").slideToggle("fast");
//       });
//     };
//   });
// });

//
// $(document).ready(function() {
//     // run test on initial page load
//     checkSize();
//
//     // run test on resize of the window
//     $(window).resize(checkSize);
// });
//
// //Function to the css rule
// function checkSize(){
//     if ($(".sampleClass").css("float") == "none" ){
//         // your code here
//     }
// }
