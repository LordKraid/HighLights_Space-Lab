const MainMain = new Swiper('.main__swiper', {
    slidesPerView: 1.17,

    navigation: {
        nextEl: '.right-arrow',
        prevEl: '.left-arrow'
    },

    pagination: {
        el: '.main__paginator__progress-bar',
        type: 'progressbar'
    },

    autoplay: {
        delay: 6000
    },

    speed: 500
});