$('.shop_slide').slick({
    arrows: true,
    autoplay: true,
    dots: true,
    slidesToShow: 3,
    responsive: [
    {
        breakpoint: 749, // 399px以下のサイズに適用
        settings: {
        slidesToShow: 1,
        },
    },
    ],
});



