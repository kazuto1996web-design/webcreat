let worksSwiper;

const worksSwiperFunc = () => {
    if (window.innerWidth <= 1024) {

        if (!worksSwiper) {
            worksSwiper = new Swiper('.works-wrap__con__swiper', {
                slidesPerView: 1,
                loop: true,

                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },

                pagination: {
                    el: '.works-wrap__con__swiper__pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.works-wrap__con__swiper__next',
                    prevEl: '.works-wrap__con__swiper__prev',
                },
            });
        }

    } else {

        if (worksSwiper) {
            worksSwiper.destroy(true, true);
            worksSwiper = undefined;
        }
    }
};

worksSwiperFunc();

window.addEventListener('resize', worksSwiperFunc);