// カルーセル
$('.voice__slick').slick({
  infinite: true,
  dots: true,
  arrows: true,
  prevArrow: '<img src="./assets/image/voice_left_arrow_sp_01.svg" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="./assets/image/voice_right_arrow_sp_01.svg" class="slide-arrow next-arrow">',
  fade: true
});

// アコーディオン
$('.question_accordion-title').on('click', function (e) {

  // .accordion-contentを選択
  var content = $(this).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();
  $(".question_accordion-title1-triangle").toggleClass("open", 300);
});