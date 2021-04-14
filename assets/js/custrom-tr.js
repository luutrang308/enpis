$(document).ready(function() {
	new WOW().init();


  $('.slider_banner').slick({
    dots: false,
    slidesToShow: 1,
    arrows: true,
    autoplay: false,/*
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next2.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next1.png' alt=''></button>",
    */responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });

  $('.slider_sp3').slick({
    dots: false,
    slidesToShow: 4,
    arrows: true,
    autoplay: false,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next2.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next1.png' alt=''></button>",
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    ]
  });

  $('input.input-qty').each(function() {
    var $this = $(this),
      qty = $this.parent().find('.is-form'),
      min = Number($this.attr('min')),
      max = Number($this.attr('max'))
    if (min == 0) {
      var d = 0
    } else d = min
    $(qty).on('click', function() {
      if ($(this).hasClass('minus')) {
        if (d > min) d += -1
      } else if ($(this).hasClass('plus')) {
        var x = Number($this.val()) + 1
        if (x <= max) d += 1
      }
      $this.attr('value', d).val(d)
    })
  });

  $('.btn_tracuu').click(function() {
    $('.form_thongtin_popup').addClass('active');
  });
  $('.close_popup').click(function() {
    $('.form_thongtin_popup').removeClass('active');
  });
  $('.btn_xem').click(function() {
    $('.form_xemthongtin').addClass('active');
  });
  $('.close_popup').click(function() {
    $('.form_xemthongtin').removeClass('active');
  });

  $('.slider_news_tinmoi').slick({
    dots: false,
    slidesToShow: 1,
    arrows: true,
    autoplay: false,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next2.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next1.png' alt=''></button>",
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });
  $('.slider_baiviet').slick({
    dots: false,
    slidesToShow: 1,
    arrows: true,
    autoplay: false,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next2.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next1.png' alt=''></button>",
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });

  $('.element_slider_video').slick({
    dots: false,
    slidesToShow: 1,
    arrows: true,
    autoplay: false,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next2.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next1.png' alt=''></button>",
  });

  $('.item_video .box_img .img').click(function() {
    $(this).css('display','none');
  });

  $('.faq_box .item').click(function() {
    $(this).toggleClass('active');
    $('.faq_box .item').not($(this)).removeClass('active');
  }); 

  $('.form_donhangdamua tr').click(function() {
    $(this).addClass('active');
  });

  $('.slider_for_pro').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider_nav_pro'
  });
  $('.slider_nav_pro').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider_for_pro',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });

  $('.icon_menu').click(function() {
    $('.menu_item').toggleClass('active');
  });





  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.icon_backtotop').fadeIn();
    } else {
      $('.icon_backtotop').fadeOut();
    }
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.main_menu').addClass('fixed_main_menu');
    } else {
      $('.main_menu').removeClass('fixed_main_menu');
    }
  });



  $('.icon_backtotop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
  $('.main_menu>li').click(function(event) {
    if ($('.main_menu').hasClass('main_menu_mobi')) {
      $('.main_menu>li').not($(this)).removeClass('active');
      /*$('.menu_pc>li .mega_menu').not($(this).next()).slideUp(300);*/
    }
    $(this).toggleClass('active');
  });

  $('.cate_post > li').click(function(event) {
    if ($('.cate_post').hasClass('cate_post_line')) {
      $('.cate_post > li').not($(this)).removeClass('active');
      /*$('.menu_pc>li .mega_menu').not($(this).next()).slideUp(300);*/
    }
    $(this).toggleClass('active');
  });

  $('.icon_bar').click(function(){
    $('.header_pc .header_page:nth-child(3)').toggleClass('active');
    $(this).toggleClass('active');
  });

  $('.slider_video_hotro').slick({
    dots: false,
    slidesToShow: 4,
    autoplay: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next2.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next1.png' alt=''></button>",
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });

  $('.slider_image_1').slick({
    dots: false,
    slidesToShow: 3,
    autoplay: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next2.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next1.png' alt=''></button>",
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slider_image_1').slick('setPosition');
  });

  $('.slider_image_2').slick({
    dots: false,
    slidesToShow: 3,
    autoplay: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next2.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next1.png' alt=''></button>",
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });
   $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slider_image_2').slick('setPosition');
  });
    
});

/**/
var TabPictureView = {
    classPreview    : ".preview_img",
    elmGirdImg      : ".list_grid_img",
    elmGirdItem     : ".gird_img_item",
    elmSlidePreview : ".slider_preview_img",
    elmClosePreview : ".close_preview_img",
    slickActive     : null,

    unSlick: function(elm = null) {
        if (elm == null) {
            elm = this.slickActive;
        }
        elm.slick('unslick');
    },

    setSlick: function(elmSetSlick) {
        this.slickActive = $(elmSetSlick).slick({
            dots: true,
            slidesToShow: 1,
        });
    },

    openPreview: function(elmClick) {
        var elementPreview = $(elmClick).find(this.classPreview);
        var sliderPreview = elementPreview.find(this.elmSlidePreview);
        elementPreview.show();
        this.setSlick(sliderPreview);
    },

    closePreview : function(elmClick){
        this.unSlick();
        $(elmClick).closest(this.classPreview).hide();
    },

    setClickLibraryPicture : function(){
        $(this.elmGirdImg).on('click', this.elmGirdItem, function(e) {
            if($(e.target).hasClass(TabPictureView.classPreview) || $(e.target).closest(TabPictureView.classPreview).length > 0){
                return true;
            }
            TabPictureView.openPreview(this);
        });
        $(this.elmGirdImg).on('click', this.elmClosePreview, function() {
            TabPictureView.closePreview(this);
        });
    }
}

TabPictureView.setClickLibraryPicture();

