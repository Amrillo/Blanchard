
  const choices = new Choices('.gallery__select-text', {
    searchEnabled: false,
    itemSelectText: '',
  });

/* -----------------------  swipers ---------------------*/
const swiper = new Swiper('.js-hero-swiper', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {
      delay: 10000
    }
  });

const elements = document.querySelectorAll('.header-bottom__select');
elements.forEach(elem=> {
    const choices = new Choices(elem, {
        searchEnabled: false,
        itemSelectText: '',
        placeholder: false,
        shouldSort: false
    })
});

let pagNum =  document.querySelector('.swiper-pagination-current');
const Swiper2 = new Swiper('.gallery__swiper', {
    // Optional parameters
    direction: 	'horizontal',

    a11y: false,

    // If we need pagination
    pagination: {
      el: '.gallery__pag',
      type: 'fraction'
    },

    // Navigation arrows
    navigation: {
      nextEl: '.gal__btn-next',
      prevEl: '.gal__btn-prev',
      disabledClass : 'gallery__btn-disabled'
    },

    slidesPerView: 1,

     breakpoints: {
      // when window width is >= 480px
      481: {
        slidesPerView: 2,
        spaceBetween: 38
      },
      769: {
        spaceBetween: 34,
        slidesPerView: 2,
      },
      // when window width is >= 640px
      1025: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },
    keyboard: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: 'slide-visible',
    // on: {
    //   init: function () {
    //      let curFrac = this.pagination.el.firstChild.textContent;
    //      if(curFrac == 1) {
    //       this.navigation.prevEl.classList.add('gallery__btn-disabled');
    //      }
    //      console.log(this.pagination.el.firstChild.textContent);
    //   }}
    });

// Swiper2.on("navigationNext", function() {
//     let currentPag = this.pagination.el.firstChild.textContent;
//     let nextBtn = this.navigation.nextEl;
//     if( currentPag == 6) {
//       this.allowSlideNext = false;
//       nextBtn.classList.add('gallery__btn-disabled');
//     }
//     else if (this.navigation.prevEl.classList.contains('gallery__btn-disabled')) {
//       this.navigation.prevEl.classList.remove('gallery__btn-disabled');
//       this.allowSlidePrev = true;
//     }
//   }
// );

// Swiper2.on("navigationPrev", function() {
//     let currentPag = this.pagination.el.firstChild.textContent;
//     let prevBtn = this.navigation.prevEl;
//     if( currentPag == 1) {
//       this.allowSlidePrev = false;
//       prevBtn.classList.add('gallery__btn-disabled');
//     }
//     else if (this.navigation.nextEl.classList.contains('gallery__btn-disabled')) {
//       this.navigation.nextEl.classList.remove('gallery__btn-disabled');
//       this.allowSlideNext = true;
//     }
//   }
// )

const swiper3 = new Swiper('.events__swiper', {
    allowTouchMove: true,
    keyboard: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.events__btn-next',
      prevEl: '.events__btn-prev',
      disabledClass: 'events__btn-disabled'
    },
    pagination: {
      el: '.events__pag',
      type: 'bullets',
      clickable: true
    },
    slidesPerView: 1,
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 34
      },
      900: {
        spaceBetween: 27,
        slidesPerView: 3,
      },

      1025: {
        spaceBetween: 50,
        slidesPerView: 3,

      }
    }
  });


  const swiper4 = new Swiper('.projects__swiper', {
    allowTouchMove: true,

    keyboard: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.projects__next-btn',
      prevEl: '.projects__prev-btn',
      disabledClass: 'projects__btn-disabled'
    },
    slidesPerView: 1,
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 34
      },
      769: {
        spaceBetween: 50,
        slidesPerView: 2,
      },

      1025: {
        spaceBetween: 50,
        slidesPerView: 3,
      }
    }
  });

/* ----------------- dropdown headers ---------------------*/
const params = {
    btnClassName: "js-header-dropdown-btn",
    dropClassName: "js-header-drop",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  };

function onDisable(evt) {
if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(
    params.disabledClassName,
    params.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
}
}

function setMenuListener() {
document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(
    `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
    );

    if (
    activeElements.length &&
    !evt.target.closest(`.${params.activeClassName}`)
    ) {
    activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
        current.classList.remove(params.activeClassName);
        } else {
        current.classList.add(params.disabledClassName);
        }
    });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
    const btn = evt.target.closest(`.${params.btnClassName}`);
    const path = btn.dataset.path;
    const drop = document.querySelector(
        `.${params.dropClassName}[data-target="${path}"]`
    );

    btn.classList.toggle(params.activeClassName);

    if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
    } else {
        drop.classList.add(params.disabledClassName);
    }
    }
});
}

setMenuListener();


/* --------------  search btn -------------------------------*/
(()=> {
  function setSearch(params) {
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

    search.addEventListener("animationend", function (evt) {
        if (this._isOpened) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        this._isOpened = false;
        } else {
        this._isOpened = true;
        }
    });

    search.addEventListener('click', function(evt) {
        evt._isSearch = true;
    });

    openBtn.addEventListener("click", function (evt) {
        this.disabled = true;

        if (
        !search.classList.contains(params.activeClass) &&
        !search.classList.contains(params.hiddenClass)
        ) {
        search.classList.add(params.activeClass);
        }
    });

    closeBtn.addEventListener('click', function () {
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
    });

    document.body.addEventListener('click', function (evt) {
        if (!evt._isSearch && search._isOpened) {
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
        }
    });
    }

    setSearch({
    openBtnClass: "js-open-search", // класс кнопки открытия
    closeBtnClass: "js-close", // класс кнопки закрытия
    searchClass: "js-form", // класс формы поиска
    activeClass: "is-opened", // класс открытого состояния
    hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
    });
})();


/* -------------------- burger-menu -----------------------------*/
// здесь мы определяем функцию, которая отвеает за работу меню, в ней не нужно ничего менять
(()=> {
  function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const menu = document.querySelector(`.${params.menuClass}`);
    function btnclick () {
      btn.classList.toggle(params.activeClass);
      if (
        !menu.classList.contains(params.activeClass) &&
        !menu.classList.contains(params.hiddenClass)
      ) {
        menu.classList.add(params.activeClass);
        document.body.style.overflow = 'hidden';
        btn.setAttribute('aria-expanded', true);
      } else {
        menu.classList.add(params.hiddenClass);
        document.body.removeAttribute('style');
        btn.setAttribute('aria-expanded', false);
      }
    }
    btn.setAttribute('aria-expanded', false);

    menu.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
      }
    });

    btn.addEventListener("click",window.debounce(btnclick,500));
  }

  // здесь мы вызываем функцию и передаем в нее классы наших элементов
  setBurger({
    btnClass: "top-header__menu-burger", // класс бургера
    menuClass: "top-header__navbar", // класс меню
    activeClass: "is-opened", // класс открытого состояния
    hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
  });



})()

const links = document.querySelectorAll('.navbar__link');
  const closebtn = document.querySelector('.top-header__menu-burger');
  const navbar = document.querySelector('.top-header__navbar');
links.forEach(link=> {
  link.addEventListener('click',()=> {
  navbar.classList.remove('is-opened');
  closebtn.classList.remove('is-opened');
  })
})

/* --------------------  Accordeon catalog section -------------------*/

const accordBtns = document.body.querySelectorAll('.accordeon__elem-text');

accordBtns.forEach(elem=> {
  elem.addEventListener("click", event => {
    const activeAccordBtn = document.querySelector(".accordeon__elem-text.is-open");
    const btnaria = event.target.getAttribute('aria-expanded');
    const content =  event.target.nextElementSibling;
    if (activeAccordBtn && activeAccordBtn !== elem) {
      activeAccordBtn.classList.toggle("is-open");
      activeAccordBtn.nextElementSibling.style.maxHeight = 0;
       activeAccordBtn.setAttribute('aria-expanded','false');
       activeAccordBtn.nextElementSibling.setAttribute('aria-hidden', 'true');
    }
    elem.classList.toggle('is-open')
    const accordBody = elem.nextElementSibling;

    if(elem.classList.contains("is-open")) {
      accordBody.style.maxHeight = 1000 + "px";
      event.target.setAttribute('aria-expanded','true')
      content.setAttribute('aria-hidden', 'false')
    }
      else {
        accordBody.style.maxHeight = 0;
        event.target.setAttribute('aria-expanded','false')
        content.setAttribute('aria-hidden', 'true')
      }
  })
});

/* ----------------------- tab js ------------------------  */

const params1 = {
  tabsClass: "js-tab-btn",
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "active"
};

function setTabs(params1) {
  const tabBtns = document.querySelectorAll(`.${params1.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = this.dataset.path;
    const wrap = this.closest(`.${params1.wrap}`);
    const currentContent = wrap.querySelector(`.${params1.content}[data-target="${path}"]`);
    const contents = wrap.querySelectorAll(`.${params1.content}`);

  contents.forEach((el) => {
    el.classList.remove(params1.active);
  });

  currentContent.classList.add(params1.active);

  tabBtns.forEach((el) => {
    el.classList.remove(params1.active);
  });

  this.classList.add(params1.active);
  }

    tabBtns.forEach(function (el) {
      el.addEventListener("click", onTabClick);
    });
}
setTabs(params1);

/*   ---------------  tooltip --------------------------------*/
tippy('.projects__tooltip-btn',{
  theme: 'project'
});

const validate = new window.JustValidate('.contacts__form', {

});

var selector = document.querySelector(".contacts__input-phone");

  var im = new Inputmask("+9(9899)999-99-99");
  im.mask(selector);

validate
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя должен состоит не менее 3х букв',
    },
    {
      rule: 'required',
      errorMessage: 'Добавьте имя',
    },
    {
      rule: 'customRegexp',
      value: /^[A-Za-z\s]*$/,
      errorMessage: 'Недопустимый формат'
    }
   ])
    .addField('#phone', [
    {   rule: 'required',
        errorMessage: 'Добавьте тел.номер',
    },
    {
       validator: (value)=> {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length == 11);
    },
      errorMessage: 'Запольните полностью',
    },
  ])


/*  ------------------   yandex map --------------------------*/

ymaps.ready(init);

function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {

        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14,
        controls: ['geolocationControl','zoomControl']
      },
      {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "440px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "380px", right: "20px" },
       }
     );

     myMap.behaviors.disable('scrollZoom');

     var myGeoObject = new ymaps.GeoObject({

      });
      var myPlacemark1 = new ymaps.Placemark([55.75,37.61], {}, {
        iconLayout: 'default#image',
        iconImageClipRect: [[1,1], [20, 20]],
        iconImageHref: 'image/dot-map.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-10, -10]
    });

    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark1);

}
/* ----------------   galley checkbox aria --------------*/

const checkboxes = document.querySelectorAll('.checkbox__span')
  checkboxes.forEach(item=> {
  item.addEventListener('click', changeCheckbox)})

function changeCheckbox(event) {
  const div = event.target.closest('label');
  switch(div.getAttribute('aria-checked')) {
      case "true":
        div.setAttribute('aria-checked', "false");
          break;
      case "false":
        div.setAttribute('aria-checked', "true");
          break;
    }
}
