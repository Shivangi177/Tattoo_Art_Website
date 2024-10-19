/*To slide hero page automatically*/
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });



/*Trending Product section to slide */

 var swiper = new Swiper(".myProduct", {
    WatchSlidesProgress: true,
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    breakpoints: {
      550: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },z
    },

  });

   /*Arrival section*/
  var swiper = new Swiper(".myArrival", {
    WatchSlidesProgress: true,
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    breakpoints: {
      550: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },

  });

  /*Brand section*/
  var swiper = new Swiper(".myBrand", {
    WatchSlidesProgress: true,
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    breakpoints: {
      550: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },

  });

  /*Blog section*/
  var swiper = new Swiper(".myBlog", {
    WatchSlidesProgress: true,
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    breakpoints: {
      550: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },

  });