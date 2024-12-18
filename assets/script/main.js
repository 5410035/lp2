// カルーセル
$('.voice__slick').slick({
  infinite: true,
  dots: true,
  arrows: true,
  prevArrow: '<img src="./assets/image/voice_left_arrow_sp_01.svg" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="./assets/image/voice_right_arrow_sp_01.svg" class="slide-arrow next-arrow">',
  fade: false,
});

// アコーディオン
$('.question_accordion-title-first').on('click', function (e) {

  // .accordion-contentを選択
  var content = $(this).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();
  $(".question_accordion-title-triangle-first").toggleClass("open", 300);
});

$('.question_accordion-title-second').on('click', function (e) {

  // .accordion-contentを選択
  var content = $(this).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();
  $(".question_accordion-title-triangle-second").toggleClass("open", 300);
});

$('.question_accordion-title-third').on('click', function (e) {

  // .accordion-contentを選択
  var content = $(this).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();
  $(".question_accordion-title-triangle-third").toggleClass("open", 300);
});

$('.question_accordion-title-fourth').on('click', function (e) {

  // .accordion-contentを選択
  var content = $(this).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();
  $(".question_accordion-title-triangle-fourth").toggleClass("open", 300);
});

$('.question_accordion-title-fifth').on('click', function (e) {

  // .accordion-contentを選択
  var content = $(this).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();
  $(".question_accordion-title-triangle-fifth").toggleClass("open", 300);
});

$(function () {
  $(".voice__slick").slick({
    arrows: true,
    autoplay: true,
    adaptiveHeight: true,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 767.9,
        settings: {
          slidesToShow: 1,
          fade: false,
        },
      },
    ],
  });
});