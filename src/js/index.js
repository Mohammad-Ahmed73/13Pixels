import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
import collapse from '@alpinejs/collapse';
import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import smoothscroll from 'smoothscroll-polyfill';
import gsap from 'gsap';

// Swiper
import 'swiper/css';

window.Swiper = Swiper;
Swiper.use([Autoplay, Pagination, Navigation]);

// Smooth Scroll polyfill for Safari (iOS)
smoothscroll.polyfill();

// GSAP
window.gsap = gsap;

// Alpine
window.Alpine = Alpine;
Alpine.plugin(collapse);
Alpine.plugin(focus);
Alpine.start();
