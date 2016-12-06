// $(document).ready(function(event){
//
//  });

// mobile nav click state
$(document).ready(function(event){
  $(".fa-bars").click(function(){
    $(".mainnav li").slideToggle("slow");
    console.log ("nav toggle working");
  });
});

// mobile nav book info click state
$(document).ready(function(event){
  $(window).resize(function(){
    if ($(window).width() <= 1024){
      $(".book").click(function(){
        $(".hover").slideToggle("slow");
        console.log (".hover toggle working");
      });
    };
  });
});

// bookshelf filtering code
$(document).ready(function(event){
  $('.shelfselect').change(function(){
    $('.book').hide();
    $('.'+$(this).val()).slice(0, 12).show();
    console.log("showing "+$(this).val()+" bookshelf");
   });
});
// Load more content with jQuery - May 21, 2013 (c) 2013 @ElmahdiMahmoud
$(function () {
    $(".book").slice(0, 12).show();
    $(".loadmore").on('click', function (e) {
        e.preventDefault();
        $(".book:hidden").slice(0, 12).slideDown();
        if ($(".book:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});



// bookshelf filtering and load more button combined trial
//
// $(document).ready(function(event){
//   var selectedBook = $('.shelfselect').val();
//
//   $('.shelfselect').change(function(){
//     //  $('.book').hide();
//       $(selectedBook).slice(0, 12).show();
//       console.log("showing "+selectedBook+" bookshelf");
//
//    $(function () {
//      $(selectedBook).slice(0, 12).show();
//      $(".loadmore").on('click', function (e) {
//          e.preventDefault();
//          $(".book:hidden").slice(0, 12).slideDown();
//          if ($(".book:hidden").length == 0) {
//              $("#load").fadeOut('slow');
//          }
//          $('html,body').animate({
//              scrollTop: $(this).offset().top
//          }, 1500);
//      });
//    });
//  });
// });
