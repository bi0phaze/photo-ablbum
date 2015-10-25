var albums = {
  frs: [
   "pics/img_001.jpg"

     ],
  oorah: [
     "pics/img_002.jpg"
   ],
  family: [
     "pics/img_003.jpg"
  ],
   white: [
      "pics/img_004.jpg"
        ],
  fridays: [
      "pics/img_005.jpg"
      ],
  marvel: [
      "pics/img_006.jpg"
    ],
                white: [
                   "pics/car1.jpg"
                     ],
               fridays: [
                   "pics/car2.jpg"
                   ],
               marvel: [
                   "pics/cars3.jpg"
                   ]

 };


 ///// /// / / / // /km functions // // /////////// /////////// /////


function changeNavStyling() {
  $('.nav').css('width','18%');
  $('.body-box').css('width','80%');
  $('.nav').css('display','inline-block');
  $('.body-box').css('margin-top', '-37%');
  $('.nav').css('height', '656px');
  $('.nav').css('background-color', '#2A2A2A')
  $('.nav').css('transition', 'all 1.5s ease-in-out')
  $('ul').css('display', 'inline-block')
  $('h1').text("ALBUM")
  $('h1').css('color', '#f5f5f5')
  $('h1').css('transition', 'all 1.5s ease-in-out')
  $('.photos').css('display', 'inline-block');
  $('.photos').css('float', 'right');
  $('.photos').css('background', 'gray');
  $('.photos').css('width', '102%');
  $('.photos').css('height', '700px');
  $('.photos').css('margin-top', '50%');
  $('footer').css('display', 'none')



}


function alb1() {
  $('.km3').css('display', 'none');
  $('.km5').css('display', 'none');
  $('.km6').css('display', 'none');
  $('.km7').css('display', 'none');
  $('.km4').css('display', 'none');
  $('.km2').css('display', 'none');
  $('.one').css('display', 'inline-block');





  changeNavStyling();

  //var otherAlbums = [
  // { photo: "pics/car1.jpg"},{ photo: 'pics/car2.jpg' },
   //{ photo: "pics/car3.jpg"}
 //]
// var photos = otherAlbums.forEach(function(el) {
  // $('.photos').append("<img src='" + el.photo + "'>")
//});

}



function home(){
$('.km').css('display', 'inline-block');
$('.km5').css('display', 'inline-block');
$('.km6').css('display', 'inline-block');
$('.km7').css('display', 'inline-block');
$('.km4').css('display', 'inline-block');
$('.km2').css('display', 'inline-block');
$('.km3').css('display', 'inline-block');



$('.nav').css('width','100%');
$('.body-box').css('width','100%');
$('.nav').css('display','block');
$('.body-box').css('margin-top', '0');
$('.nav').css('height', '80px');
$('.nav').css('border-bottom', '2px solid gray');
$('.nav').css('background-color', '#00CCFF')
$('.nav').css('transition', 'all 1.5s ease-in-out')
$('ul').css('display', 'inline-block')
$('h1').text("ALBUMS")
$('h1').css('color', '#f5f5f5')
$('h1').css('transition', 'all 1.5s ease-in-out')
$('button').css('display', 'none')
}





//  var km = "." + $(this).attr('rel');
  //  console.log(km);
    //$(km).addClass('active-section');
    //$(km).siblings('div').removeClass('active-section');




            // // // // // album1 // // // // // // / // / // / / /

              $('.km').on('click', function (event) {
                event.preventDefault();

    //globalObject = $(this)

  $('.km3').css('display', 'none');
  $('.km5').css('display', 'none');
  $('.km6').css('display', 'none');
  $('.km7').css('display', 'none');
  $('.km4').css('display', 'none');
  $('.km2').css('display', 'none');
  $('.km').css('display', 'none');


  changeNavStyling();

  var otherAlbums = [
   { photo: "pics/car1.jpg"},{ photo: 'pics/car2.jpg' },
   { photo: "pics/car3.jpg"}
 ]
 var photos = otherAlbums.forEach(function(el) {
  $('.one').append("<img src='" + el.photo + "'>")



   $('.butt1').on('click', function (event) {
     event.preventDefault();
     home();
$('.photos').addClass("hidden");
$('.photos').css('display', 'none');
});
      $('.butt2').on('click', function (event) {
      event.preventDefault();


      });

 });
 });








 /// / / / //// / // / // // / ALBUM2 // / // / // // /// // /// // /// //

  $('.km3').on('click', function (event) {
    event.preventDefault();

  $('.km').css('display', 'none');
  $('.km5').css('display', 'none');
  $('.km6').css('display', 'none');
  $('.km7').css('display', 'none');
  $('.km4').css('display', 'none');
  $('.km2').css('display', 'none');
  $('.km3').css('display', 'none');
  changeNavStyling();


  var otherAlbums = [
   { photo: "pics/milt-1.jpg"},{ photo: 'pics/milt-2.jpg' },
   { photo: "pics/milt-3.jpg"}
  ]

  var photos = otherAlbums.forEach(function(el) {
   $('.two').append("<img src='" + el.photo + "'>")


   $('.butt1').on('click', function (event) {
     event.preventDefault();
     home();
$('.photos').addClass("hidden");
$('.photos').css('display', 'none');
});

$('.butt2').on('click', function (event) {
  event.preventDefault();

  alb1();

});

  });

  });

  // /// // /// //// /// // / ALBUM3 // // /// // /// // /// // // // // // //


  $('.km4').on('click', function (event) {
    event.preventDefault();

  $('.km3').css('display', 'none');
  $('.km5').css('display', 'none');
  $('.km6').css('display', 'none');
  $('.km7').css('display', 'none');
  $('.km').css('display', 'none');
  $('.km2').css('display', 'none');
  $('.km4').css('display', 'none');
  changeNavStyling();
  // $('.km4').siblings().css(disp)



  var otherAlbums = [
   { photo: "pics/dog-1.jpg"},{ photo: 'pics/dog-2.jpg' },
   { photo: "pics/dog-3.jpg"}
  ]

  var photos = otherAlbums.forEach(function(el) {
   $('.three').append("<img src='" + el.photo + "'>")

   $('.butt1').on('click', function (event) {
     event.preventDefault();
     home();
$('.photos').addClass("hidden");
$('.photos').css('display', 'none');
});

  });

  });







  /// // / //// /// /// // // //ALBUM4 // //// // /// // // /// ///

  $('.km5').on('click', function (event) {
    event.preventDefault();

  $('.km3').css('display', 'none');
  $('.km').css('display', 'none');
  $('.km6').css('display', 'none');
  $('.km7').css('display', 'none');
  $('.km4').css('display', 'none');
  $('.km2').css('display', 'none');
  $('.km5').css('display', 'none');
  changeNavStyling();


  var otherAlbums = [
   { photo: "pics/gf-1.jpg"},{ photo: 'pics/gf-2.jpg' },
   { photo: "pics/gf-3.jpg"}
 ]

 var photos = otherAlbums.forEach(function(el) {
   $('.four').append("<img src='" + el.photo + "'>")

   $('.butt1').on('click', function (event) {
     event.preventDefault();
     home();
$('.photos').addClass("hidden");
$('.photos').css('display', 'none');
});


 });

  });

  ///// // /// ///// /// ///ALBUM5 // // // //// // /// // // // / /



  $('.km6').on('click', function (event) {
    event.preventDefault();

  $('.km3').css('display', 'none');
  $('.km5').css('display', 'none');
  $('.km').css('display', 'none');
  $('.km7').css('display', 'none');
  $('.km4').css('display', 'none');
  $('.km2').css('display', 'none');
  $('.km6').css('display', 'none');
    changeNavStyling();

  var otherAlbums = [
   { photo: "pics/rndm-1.jpg"},{ photo: 'pics/rndm-2.jpg' },
   { photo: "pics/rndm-3_003.jpg"}
 ]

 var photos = otherAlbums.forEach(function(el) {
   $('.five').append("<img src='" + el.photo + "'>")

   $('.butt1').on('click', function (event) {
     event.preventDefault();
     home();
$('.photos').addClass("hidden");
$('.photos').css('display', 'none');
});

 });

  });

      ///// // // // ////// / // / ////   ALBUM 6 // // ///// // //



      $('.km7').on('click', function (event) {
        console.log("WHAT AM I", this);
        event.preventDefault();

      $('.km3').css('display', 'none');
      $('.km5').css('display', 'none');
      $('.km6').css('display', 'none');
      $('.km').css('display', 'none');
      $('.km4').css('display', 'none');
      $('.km2').css('display', 'none');
      $('.km7').css('display', 'none');
        changeNavStyling();


      var otherAlbums = [
       { photo: "pics/img_001.jpg"},{ photo: 'pics/img_002.jpg' },
       { photo: "pics/img_003.jpg"},{ photo: 'pics/img_004.jpg',},
       { photo: "pics/img_005.jpg"},{ photo: 'pics/img_006.jpg'}
     ]

     var photos = otherAlbums.forEach(function(el) {
       $('.six').append("<img src='" + el.photo + "'>")

       $('.butt1').on('click', function (event) {
         event.preventDefault();
         home();
    $('.photos').addClass("hidden");
    $('.photos').css('display', 'none');
    });

     });
  });







//  $('div  a').on('click', function (event) {
//    event.preventDefault();
//
//    var clickedSection = "." + $(this).attr('rel');
//       console.log(clickedSection);
//       $(clickedSection).addClass('active-section');
//       $(clickedSection).siblings('section').removeClass('active-section');

//     });
