var albums = {
  frs: [
   "pics/car1.jpg",
   "pics/car2.jpg",
   "pics/car3.jpg",
     ],
  oorah: [
    "pics/milt-1.jpg",
    "pics/milt-2.jpg",
    "pics/milt-3.jpg",
   ],
  dogs: [
    "pics/dog-1.jpg",
    "pics/dog-2.jpg",
    "pics/dog-3.jpg",
  ],
   white: [
     "pics/gf-1.jpg",
     "pics/gf-2.jpg",
     "pics/gf-3.jpg",
        ],
  fridays: [
    "pics/rndm-1.jpg",
    "pics/rndm-2.jpg",
    "pics/rndm-3.jpg",
      ],
  marvel: [
    "pics/baby-1.jpg",
    "pics/baby-2.jpg",
    "pics/baby-3.jpg",
    ]

 };
 ///// /// / / / // /km functions // // /////////// /////////// /////
function changeNavStyling() {
  $('.nav').css('width','18%');
  $('.body-box').css('width','80%');
  $('.nav').css('display','inline-block');
  $('.body-box').css('margin-top', '-37%');
  $('.nav').css('height', '856px');
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

function kmhide() {
$('.km3').css('display', 'none');
$('.km5').css('display', 'none');
$('.km').css('display', 'none');
$('.km7').css('display', 'none');
$('.km4').css('display', 'none');
$('.km2').css('display', 'none');
$('.km6').css('display', 'none');
  changeNavStyling();
}

function alb1() {
  $('.km3').css('display', 'none');
  $('.km5').css('display', 'none');
  $('.km6').css('display', 'none');
  $('.km7').css('display', 'none');
  $('.km4').css('display', 'none');
  $('.km2').css('display', 'none');
  $('two').css('display', 'none');
  $('.one').css('display', 'inline-block');
  changeNavStyling();
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


//////////  button clicks //////////


$('button').on('click', function()
  { console.log($(this).attr('rel'));

  var foto = $(this).attr('rel');
  var rightAlbum = albums[foto];
  var stringOfPhotos = ""
  rightAlbum.forEach(function(el) {
      stringOfPhotos += "<container><img src='" + el + "'></container>"
  })
  $('.photos').html(stringOfPhotos);
});
  ///////    // // // // // album1 // // // // // // / // / // / / /

  $('.km').on('click', function (event) {
    event.preventDefault();
    kmhide();
    var albums = [
     { photo: "pics/car1.jpg"},{ photo: 'pics/car2.jpg' },
     { photo: "pics/car3.jpg"}   ]
    var photos = albums.forEach(function(el) {
      $('.photos').append("<img src='" + el.photo + "'>")
  });
 });
/// / / / //// / // / // // / ALBUM2 // / // / // // /// // /// // /// //

  $('.km3').on('click', function (event) {
    event.preventDefault();
    kmhide();
  var albums = [
   { photo: "pics/milt-1.jpg"},{ photo: 'pics/milt-2.jpg' },
   { photo: "pics/milt-3.jpg"}  ]
  var photos = albums.forEach(function(el) {
   $('.photos').append("<img src='" + el.photo + "'>")
});
});
  // /// // /// //// /// // / ALBUM3 // // /// // /// // /// // // // // // //
  $('.km4').on('click', function (event) {
    event.preventDefault();
    kmhide();
  var albums = [
   { photo: "pics/dog-1.jpg"},{ photo: 'pics/dog-2.jpg' },
   { photo: "pics/dog-3.jpg"}  ]
  var photos = albums.forEach(function(el) {
   $('.photos').append("<img src='" + el.photo + "'>")
    });
    });
  /// // / //// /// /// // // //ALBUM4 // //// // /// // // /// ///
  $('.km5').on('click', function (event) {
    event.preventDefault();
    kmhide();
  var albums = [
   { photo: "pics/gf-1.jpg"},{ photo: 'pics/gf-2.jpg' },
   { photo: "pics/gf-3.jpg"} ]
 var photos = albums.forEach(function(el) {
   $('.photos').append("<img src='" + el.photo + "'>")
    });
    });
  ///// // /// ///// /// ///ALBUM5 // // // //// // /// // // // / /
  $('.km6').on('click', function (event) {
    event.preventDefault();
    kmhide();
  var albums = [
   { photo: "pics/rndm-1.jpg"},{ photo: 'pics/rndm-2.jpg' },
   { photo: "pics/rndm-3.jpg"} ]
 var photos = albums.forEach(function(el) {
   $('.photos').append("<img src='" + el.photo + "'>")
  });
  });
      ///// // // // ////// / // / ////   ALBUM 6 // // ///// // //
      $('.km7').on('click', function (event) {
        event.preventDefault();
        kmhide();
      var albums = [
       { photo: "pics/baby-1.jpg"},{ photo: 'pics/baby-2.jpg' },
       { photo: "pics/baby-3.jpg"}     ]
     var photos = albums.forEach(function(el) {
       $('.photos').append("<img src='" + el.photo + "'>")
  });
  });
