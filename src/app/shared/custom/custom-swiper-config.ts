import { SwiperOptions } from 'swiper';


export const SwiperConfigModel: SwiperOptions = {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        type: 'progressbar'
    },
    navigation: {
        enabled: true,
    },
    slidesPerView: 1,
    watchSlidesProgress: true,
    loop: true
};