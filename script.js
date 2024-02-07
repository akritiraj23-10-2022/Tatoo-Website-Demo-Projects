var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  /*=== navbar toggle ===*/
  let navBar = document.querySelector('.navLink');
  let menuBar = document.querySelector('#menuBtn');

  menuBar.onclick = () => {
    navBar.classList.toggle('active');
    menuBar.classList.toggle('bx-x');
  }

  /*==== product section start ===*/
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
      },
    },

  });

  /*==== arrival section start ===*/
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

  /*=== brand Section Start ===*/
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

  /*=== Blogs Section Start ===*/
  var swiper = new Swiper(".myBlog", {
    WatchSlidesProgress: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      550: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

  });