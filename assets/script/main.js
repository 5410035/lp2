
// アコーディオン
$('.question__accordion-title').on('click', function (e) {

  // .accordion-contentを表示・非表示
  $(this).next().slideToggle();
  $(this).find(".question__accordion-title-triangle").toggleClass("open", 300);
});


$(function () {
  $(".voice__slick").slick({
    arrows: true,
    autoplay: false,
    adaptiveHeight: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    fade: false,
    prevArrow: '<img src="./assets/image/voice_left_arrow_sp_01.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="./assets/image/voice_right_arrow_sp_01.svg" class="slide-arrow next-arrow">',
    responsive: [
      {
        breakpoint: 767.9,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});


$(document).ready(function () {
  const $topuparrow = $('.topuparrow');
  const scrollThreshold = 200; // 指定値 (スクロール距離)

  // スクロール時の処理
  $(window).scroll(function () {
    if ($(this).scrollTop() > scrollThreshold) {
      $topuparrow.fadeIn(); // フェードイン
    } else {
      $topuparrow.fadeOut(); // フェードアウト
    }
  });
});